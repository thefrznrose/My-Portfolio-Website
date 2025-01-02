export function getPoints(
    nucleotideData: number[][] // expect a 2D array where each element is [x, y, z] etc.
): number[][][] {
    const vertices: number[][] = [];
    const indices: number[][] = [];

    // Assuming first array is vertices and second array is indices
    const vertexData = nucleotideData[0]; // the first array holds the coordinates
    const indexData = nucleotideData[1]; // the second array holds indices for mesh creation

    // Loop through the vertex data and create the appropriate mesh
    for (let i = 0; i < vertexData.length; i += 3) {
        const x = vertexData[i];
        const y = vertexData[i + 1];
        const z = vertexData[i + 2];
        vertices.push([x, y, z]); // Add each vertex
    }

    // If there are indices, organize them as needed
    // Assuming each group of indices defines a triangle or line
    for (let i = 0; i < indexData.length; i += 3) {
        indices.push([indexData[i], indexData[i + 1], indexData[i + 2]]);
    }

    return [vertices, indices];
}
