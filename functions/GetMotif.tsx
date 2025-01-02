import * as BABYLON from '@babylonjs/core';
import axios from 'axios';
import { getPoints } from './GetPoints';

export async function getMotif(
    motifJSONFileName: string,
    motifColorHex: number = 0xcc2900,
    highLightColotHex: number = 0xff3300,
    scene: BABYLON.Scene
): Promise<BABYLON.Mesh> {
    const motif = new BABYLON.Mesh('motif', scene);
    const motifJSONFileData = (await axios.get(`${motifJSONFileName}`)).data;
    console.log(motifJSONFileData);

    const jsonObject = motifJSONFileData;

    for (const key in jsonObject) {
        const vertices = getPoints(jsonObject[key])[0];
        const residue = new BABYLON.Mesh('residue', scene);

        for (let i = 0; i < vertices.length; i++) {
            const vertexData = vertices[i];
            const point = new BABYLON.Vector3(vertexData[0], vertexData[1], vertexData[2]);

            const mesh = BABYLON.MeshBuilder.CreateSphere('motifMesh', { diameter: 0.2, segments: 8 }, scene);
            mesh.position = point;

            const motifMaterial = new BABYLON.StandardMaterial('motifMaterial', scene);
            motifMaterial.diffuseColor = new BABYLON.Color3(0,1,0);
            motifMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // no specular highlight
            motifMaterial.emissiveColor = new BABYLON.Color3(0, 0, 0); // no emissive effect

            mesh.material = motifMaterial;
            residue.addChild(mesh);
        }

        motif.addChild(residue);
    }

    motif.metadata = { fileName: motifJSONFileName };
    return motif;
}
