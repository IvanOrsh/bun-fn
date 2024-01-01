import { describe, it, expect } from "bun:test";

import { binarySearchIter, binarySearchRec } from "./binary-search";

describe("Test binarySearch", () => {
  it.each([
    {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      target: 2,
      result: 2,
    },

    {
      arr: [2, 5, 7, 9],
      target: 5,
      result: 1,
    },

    {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      target: 9,
      result: -1,
    },
  ])("$arr should return $result", ({ arr, target, result }) => {
    const res = binarySearchIter(arr, target);
    expect(res).toEqual(result);
  });
});

describe("Test binarySearchRec", () => {
  it.each([
    {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      target: 2,
      result: 2,
    },

    {
      arr: [2, 5, 7, 9],
      target: 5,
      result: 1,
    },

    {
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      target: 9,
      result: -1,
    },
  ])("$arr should return $result", ({ arr, target, result }) => {
    const res = binarySearchRec(arr, target);
    expect(res).toEqual(result);
  });
});
