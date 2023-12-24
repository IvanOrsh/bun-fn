import { describe, it, expect } from "bun:test";

import { getSquaredSorted } from "./arr-sorted-squared";

describe("Test getSquaredSorted", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5],
      result: [1, 4, 9, 16, 25],
    },
    {
      arr: [0, 5, 6],
      result: [0, 25, 36],
    },
    {
      arr: [-4, -2, 0, 1, 3],
      result: [0, 1, 4, 9, 16],
    },
    {
      arr: [2, 2, 3],
      result: [4, 4, 9],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const res = getSquaredSorted(arr);
    expect(res).toEqual(result);
  });

  it("when provided with empty array should return empty array", () => {
    const arr: number[] = [];
    const result = getSquaredSorted(arr);
    expect(result).toEqual([]);
  });

  it("numbetr can be negative", () => {
    const arr = [-1, -2, -3, -4, -5];
    const result = getSquaredSorted(arr);
    expect(result).toEqual([1, 4, 9, 16, 25]);
  });
});
