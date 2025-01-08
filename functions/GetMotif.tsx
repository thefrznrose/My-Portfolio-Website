import * as BABYLON from '@babylonjs/core';
import axios from 'axios';

function createBabylonMaterial(color: String, scene: BABYLON.Scene) {
    // Create a babylon standard material using the motif color. Update this in the future to provide more options
    const myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
    const color3 = BABYLON.Color3.FromHexString("#" + color.replace(/^0x/, ""));
    myMaterial.diffuseColor = color3
    myMaterial.specularColor = color3;
    return myMaterial
}

async function addChildrenFromJson(
    motif: BABYLON.Mesh, 
    material: BABYLON.StandardMaterial, 
    motifJSONFilename: string, 
    scene: BABYLON.Scene
): Promise<number[]> {
    const motifJSONFileData = (await axios.get(motifJSONFilename)).data;
    const keys = Object.keys(motifJSONFileData);
    let i = 0;
    let center = [0, 0, 0];
    keys.forEach((key) => {
      if (motifJSONFileData[key].length === 4) {
        // Counting each child
        i += 1;
        const backbonePositions = motifJSONFileData[key][0];
        const backboneIndicies = motifJSONFileData[key][1];
        const ringPositions = motifJSONFileData[key][2];
        const ringIndicies = motifJSONFileData[key][3];
        // Find the vertex data of the backbone using the first 2 array indicies.
        const backboneMesh = new BABYLON.Mesh("backbone_" + key, scene);
        const backboneVertexData = new BABYLON.VertexData();
        backboneVertexData.positions = backbonePositions;
        backboneVertexData.indices = backboneIndicies;
        backboneVertexData.applyToMesh(backboneMesh);
        backboneMesh.material = material;
        // Find the vertex data of the rings using the last 2 array indicies.
        const ringMesh = new BABYLON.Mesh("ring_" + key, scene);
        const ringVertexData = new BABYLON.VertexData();
        ringVertexData.positions = ringPositions;
        ringVertexData.indices = ringIndicies;
        ringVertexData.applyToMesh(ringMesh);
        ringMesh.material = material;
        // Summation of each position of the rings for finding the center.
        center[0] += ringPositions[0];
        center[1] += ringPositions[1];
        center[2] += ringPositions[2];
        // Combine both the backbone and rings into a single unit called combinedMesh.
        const combinedMesh = new BABYLON.Mesh("combined_" + key, scene);
        ringMesh.parent = backboneMesh;
        combinedMesh.addChild(backboneMesh);
        combinedMesh.addChild(ringMesh);
        //Assign the material to the combined mesh and add it to the motif parent structure.
        combinedMesh.material = material;
        motif.addChild(combinedMesh);
      }
    });
    // Find the center by dividing the summation of the ring positions by the child count.
    center[0] /= i;
    center[1] /= i;
    center[2] /= i;
    // Set the center as the pivot point
    const center3 = new BABYLON.Vector3(center[0], center[1], center[2])
    motif.setPivotPoint(new BABYLON.Vector3(center[0], center[1], center[2]));
    motif.position = center3
    return center;
}

export async function getMotif(
    motifJSONFileName: string,
    motifColorHex: String = 'cc2900',
    highLightColorHex: number = 0xff3300,
    scale: number = 1,
    scene: BABYLON.Scene
  ): Promise<{ motif: BABYLON.Mesh; center: number[] }> {
    // Create a new custom mesh for the motif
    const motif = new BABYLON.Mesh("custom", scene);
    var center = [0,0,0]
    // Try to create the motif.
    try {
      const myMaterial = createBabylonMaterial(motifColorHex, scene);
      center = await addChildrenFromJson(motif, myMaterial, motifJSONFileName, scene);
      motif.scaling = new BABYLON.Vector3(scale, scale, scale);
    } catch (error) {
      console.error("Error fetching or parsing motif JSON:", error);
    }
    return { motif, center };
  }
  