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

  DFS: VISIT CHILD NODES BEFORE NEIGHBORS NODES

  A -> B -> C -> E -> D -> F
  - no unique dfs for a given graph

  ============rec==============

  stack:

  | trav 'D' | 'F'
  | trav 'E' | 'D'
  | trav 'C' |
  | trav 'B' | 'F'
  |_trav_'A'_| 

  trav(graph, start, output, visited) {
    -> push, visited
    -> neighbors of A
    -> if not visited:
      trav(...)
  }

  ========complexity======== +

  T = O(V + E) (traverse every vertex at least once, E - # of edges, length of for loop)
  S = O(V):
    - output array
    - visited object
    - call stack 
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

export function recursiveDFS(
  graph: Record<string, string[]>,
  start: string,
  output: string[] = [],
  visited: Record<string, boolean> = {}
): string[] {
  output.push(start);
  visited[start] = true;

  const neighbors = graph[start];

  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      recursiveDFS(graph, neighbor, output, visited);
    }
  }

  return output;
}
