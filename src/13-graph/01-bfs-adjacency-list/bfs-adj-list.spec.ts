import { describe, expect, it } from "bun:test";

import { traverseBFS } from "./bfs-adj-list";

describe("Test traverseBFS", () => {
  it.each([
    {
      adjacencyList: {
        A: ["B", "F"],
        B: ["A", "F", "C"],
        C: ["B", "E", "D"],
        D: ["C", "E"],
        E: ["D", "C", "F"],
        F: ["A", "B", "E"],
      },
      start: "A",
      result: ["A", "B", "F", "C", "E", "D"],
    },
    {
      adjacencyList: {
        A: ["B", "F"],
        B: ["A", "F", "C"],
        C: ["B", "E", "D"],
        D: ["C", "E"],
        E: ["D", "C", "F"],
        F: ["A", "B", "E"],
      },
      start: "F",
      result: ["F", "A", "B", "E", "C", "D"],
    },
  ])(
    "$adjacencyList should return $result",
    ({ adjacencyList, start, result }) => {
      const res = traverseBFS(adjacencyList, start);

      expect(res).toEqual(result);
    }
  );
});
