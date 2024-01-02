import { describe, it, expect } from "bun:test";

import { searchForRangeRec, searchForRangeIter } from "./search-for-range";

describe("Test searchForRangeRec", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5],
      target: 3,
      result: [2, 2],
    },
    {
      arr: [],
      target: 1,
      result: [-1, -1],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      target: 8,
      result: [3, 4],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      target: 6,
      result: [-1, -1],
    },
  ])("$arr should return $result", ({ arr, target, result }) => {
    const res = searchForRangeRec(arr, target);
    expect(res).toEqual(result);
  });
});

describe("Test searchForRangeIter", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5],
      target: 3,
      result: [2, 2],
    },
    {
      arr: [],
      target: 1,
      result: [-1, -1],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      target: 8,
      result: [3, 4],
    },
    {
      arr: [5, 7, 7, 8, 8, 10],
      target: 6,
      result: [-1, -1],
    },
  ])("$arr should return $result", ({ arr, target, result }) => {
    const res = searchForRangeIter(arr, target);
    expect(res).toEqual(result);
  });
});
