import * as BABYLON from '@babylonjs/core';
import axios from 'axios';

export async function getMotif(
    motifJSONFileName: string,
    motifColorHex: number = 0xcc2900,
    highLightColorHex: number = 0xff3300,
    scene: BABYLON.Scene 
): Promise<{motif: BABYLON.Mesh, center: number[]}> { 
    const motif = new BABYLON.Mesh('custom', scene);

    let allPositions: number[][] = [];  
    let center = [0, 0, 0];
    try {
        const motifJSONFileData = (await axios.get(motifJSONFileName)).data;
        const keys = Object.keys(motifJSONFileData);
        let i = 0;
        keys.forEach((key) => {
            if (motifJSONFileData[key].length === 4) {
                i+=1;
                const backbonePositions = motifJSONFileData[key][0];
                const backboneIndicies = motifJSONFileData[key][1];
                const ringPositions = motifJSONFileData[key][2];
                const ringIndicies = motifJSONFileData[key][3];

                center[0] += ringPositions[0];
                center[1] += ringPositions[1];
                center[2] += ringPositions[2];

                allPositions.push(...backbonePositions, ...ringPositions);

                const backboneMesh = new BABYLON.Mesh('backbone_' + key, scene);
                const backboneVertexData = new BABYLON.VertexData();
                backboneVertexData.positions = backbonePositions;
                backboneVertexData.indices = backboneIndicies;
                backboneVertexData.applyToMesh(backboneMesh);

                const ringMesh = new BABYLON.Mesh('ring_' + key, scene);
                const ringVertexData = new BABYLON.VertexData();
                ringVertexData.positions = ringPositions;
                ringVertexData.indices = ringIndicies;
                ringVertexData.applyToMesh(ringMesh);

                const combinedMesh = new BABYLON.Mesh('combined_' + key, scene);
                ringMesh.parent = backboneMesh;
                combinedMesh.addChild(backboneMesh);
                combinedMesh.addChild(ringMesh);

                const material = new BABYLON.StandardMaterial('material_' + key, scene);
                material.diffuseColor = new BABYLON.Color3(motifColorHex);
                combinedMesh.material = material;

                motif.addChild(combinedMesh);
            }
        });
        
        center[0] /= i;
        center[1] /= i;
        center[2] /= i;

        motif.setPivotPoint(new BABYLON.Vector3(center[0], center[1], center[2]));
    } catch (error) {
        console.error('Error fetching or parsing motif JSON:', error);
    }

    return { motif, center };
}
