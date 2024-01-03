import { describe, it, expect } from "bun:test";

import { searchInMatrix } from "./search-in-matrix";

describe("Test searchInMatrix", () => {
  it.each([
    {
      matrix: [[]],
      target: 1,
      result: false,
    },
    {
      matrix: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      target: 12,
      result: true,
    },
    {
      matrix: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ],
      target: 21,
      result: false,
    },
  ])("$matrix should return $result", ({ matrix, target, result }) => {
    const res = searchInMatrix(matrix, target);
    expect(res).toEqual(result);
  });
});
