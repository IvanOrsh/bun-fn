import { describe, it, expect } from "bun:test";

import { permutations } from "./permutations";

describe("Test permutations", () => {
  it.each([
    {
      arr: [1],
      result: [[1]],
    },
    {
      arr: [1, 2, 3],
      result: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2],
      ],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const res = permutations(arr);
    expect(res).toEqual(result);
  });
});
