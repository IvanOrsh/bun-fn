import { describe, it, expect } from "bun:test";

import { traverseBFS } from "./bfs-adj-matrix";

describe("Test traverseBFS", () => {
  it.each([
    {
      adjMatrix: [
        [0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1, 0],
      ],
      vertices: ["A", "B", "C", "D", "E", "F"],
      start: "A",
      result: ["A", "B", "F", "C", "E", "D"],
    },
    {
      adjMatrix: [
        [0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 0, 1],
        [0, 1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 0],
        [0, 0, 1, 1, 0, 1],
        [1, 1, 0, 0, 1, 0],
      ],
      vertices: ["A", "B", "C", "D", "E", "F"],
      start: "F",
      result: ["F", "A", "B", "E", "C", "D"],
    },
  ])(
    "traverseBFS($adjMatrix, $vertices, $start)",
    ({ adjMatrix, vertices, start, result }) => {
      expect(traverseBFS(adjMatrix, vertices, start)).toEqual(result);
    }
  );
});
