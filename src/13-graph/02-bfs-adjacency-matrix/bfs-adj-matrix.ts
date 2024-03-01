/*
    A <--start
  / \
  B---F 
  |   | 
  C   |  
  | \ |
  D-- E 

adjacency matrix:

  A B C D E F
A 0 1 0 0 0 1
B 1 0 1 0 0 1
C 0 1 0 1 1 0
D 0 0 1 0 1 0 
E 0 0 1 1 0 1
F 1 1 0 0 1 0

adjMatrix = 
  [
    [0, 1, 0, 0, 0, 1], 
    [1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0]
  ]

vertices = ["A", "B", "C", "D", "E", "F"]

vertexIndexes = {
  "A": 0,
  "B": 1,
  "C": 2,
  "D": 3,
  "E": 4,
  "F": 5
}

============
T = O(V^2)
S = O(V)
*/

/*
const vertices = ["A", "B", "C", "D", "E", "F"];
const vertexIndexes: Record<string, number> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
};
const adjacencyMatrix = [
  [0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 0, 1],
  [1, 1, 0, 0, 1, 0],
];
*/

export function traverseBFS(
  adjMatrix: number[][],
  vertices: string[],
  start: string
) {
  const vertexIndexes: Record<string, number> = {};
  for (let i = 0; i < vertices.length; i++) {
    vertexIndexes[vertices[i]] = i;
  }

  const output: string[] = [];
  const visited: Record<string, boolean> = {};
  const queue = [start];
  visited[start] = true;

  let current: string;
  let currentIdx: number;

  while (queue.length > 0) {
    current = queue.shift() as string;

    output.push(current);

    // check its neighbors
    currentIdx = vertexIndexes[current];
    const neighbors = adjMatrix[currentIdx];
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i] === 1 && !visited[vertices[i]]) {
        queue.push(vertices[i]);
        visited[vertices[i]] = true;
      }
    }
  }

  return output;
}
