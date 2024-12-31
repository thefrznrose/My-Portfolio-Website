import * as BABYLON from '@babylonjs/core';
import axios from 'axios';
import { getPoints } from './GetPoints';
import { JsonInput } from '@mantine/core';

export async function getMotif(
    motifJSONFileName: string,
    motifColorHex: number = 0xcc2900,
    highLightColorHex: number = 0xff3300,
    scene: BABYLON.Scene // Assuming a Babylon scene object is passed
): Promise<BABYLON.Mesh> {
    const motif = new BABYLON.Mesh('motif', scene); // Create the main motif mesh
    const motifJSONFileData = (await axios.get(`${motifJSONFileName}`)).data;
    console.log(motifJSONFileData);

    const jsonObject = motifJSONFileData;

    for (const key in jsonObject) {
        const vertices = getPoints(jsonObject[key]);
        console.log(jsonObject[key])
        const residue = new BABYLON.Mesh('residue', scene); // Group residue mesh

        for (let i = 0; i < vertices[0].length; i += 1) {
            // Create custom geometry using vertices and indices
            const positions = vertices[0][i]; // Array of positions (vertices)
            const indices = vertices[1][i];   // Array of indices for creating triangles

            // Create the mesh using Babylon.js custom data
            const customMesh = new BABYLON.Mesh('motifMesh', scene);
            const vertexData = new BABYLON.VertexData();

            // Set the positions and indices for the custom mesh
            vertexData.positions = positions.flat();  // Flatten the positions array
            vertexData.indices = indices.flat();      // Flatten the indices array

            // Apply the vertex data to the mesh
            vertexData.applyToMesh(customMesh);

            // Set material for the custom mesh
            const motifMaterial = new BABYLON.StandardMaterial('motifMaterial', scene);
            motifMaterial.diffuseColor = new BABYLON.Color3(0,1,0);
            customMesh.material = motifMaterial;

            residue.addChild(customMesh);
        }

        motif.addChild(residue);
    }

    // Set up motif mesh user data
    motif.metadata = { fileName: motifJSONFileName };

    return motif;
}
