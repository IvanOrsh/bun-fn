import { describe, it, expect } from "bun:test";

import { recursiveDFS } from "./dfs";

describe("Test recursiveDFS", () => {
  it.each([
    {
      graph: {
        A: ["B", "F"],
        B: ["A", "C"],
        C: ["B", "E", "D"],
        D: ["C", "E"],
        E: ["D", "C", "F"],
        F: ["A", "E"],
      },
      start: "A",
      output: ["A", "B", "C", "E", "D", "F"],
    },
  ])("$graph should return $output", ({ graph, start, output }) => {
    const res = recursiveDFS(graph, start);
    expect(res).toEqual(output);
  });
});
