/*

    A <--start
  / \
  B---F 
  |   | 
  C   |  
  | \ |
  D-- E 

  stored as adjacency list:
  {
  'A': ['B', 'F'],
  'B': ['A', 'F', 'C'],
  'C': ['B', 'E', 'D'],
  'D': ['C', 'E'],
  'E': ['D', 'C', 'F'],
  'F': ['A', 'B', 'E']
  }

  BFS: VISIT NEIGHBORS NODES BEFORE CHILD NODES

  start ->   A 
          -> B, F
          -> C
          -> E, D

  =====================
  algorithm:

  visited = {
    "A": true
  }

  queue = ["A",  ]
  output = [  ] (as we visit nodes, we push them into this array)
  
  while queue.length > 0:
    1. dequeue:
    node = queue.shift()

    2. push
    output.push(node)

    3. enqueue unvisited neighbors (if they are not in visited)
    for neighbor in adjacencyList[node]:
      if neighbor not in visited:
        visited[neighbor] = true
        queue.push(neighbor)

  =====
  T = O(V + E)
  S = O(V) (visited)

*/

// for example
/*
const adjacencyList: Record<string, string[]> = {
  A: ["B", "F"],
  B: ["A", "F", "C"],
  C: ["B", "E", "D"],
  D: ["C", "E"],
  E: ["D", "C", "F"],
  F: ["A", "B", "E"],
};
*/

export function traverseBFS(
  adjacencyList: Record<string, string[]>,
  start: string
): string[] {
  const visited: Record<string, boolean> = {};
  const queue: string[] = [start];
  const output: string[] = [];

  visited[start] = true;

  let current;

  while (queue.length > 0) {
    current = queue.shift() as string;

    output.push(current);

    const neighbors = adjacencyList[current];
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }

  return output;
}
