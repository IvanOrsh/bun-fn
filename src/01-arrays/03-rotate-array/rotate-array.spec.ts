import { expect, it, describe } from "bun:test";

import { rotateArrayBruteForce, rotateArray } from "./rotate-array";

describe("Test rotateArrayBruteForce", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5], // k=1: [5,1,2,3,4], k=2: [4,5,1,2,3]
      k: 2,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 7,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 107,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [-1, -100, 3, 99],
      k: 2,
      result: [3, 99, -1, -100],
    },
    {
      arr: [],
      k: 2,
      result: [],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 0,
      result: [1, 2, 3, 4, 5],
    },
  ])("$arr and $k should return $result", ({ arr, k, result }) => {
    rotateArrayBruteForce(arr, k);
    expect(arr).toEqual(result);
  });
});

describe("Test rotateArray", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5], // k=1: [5,1,2,3,4], k=2: [4,5,1,2,3]
      k: 2,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 7,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 107,
      result: [4, 5, 1, 2, 3],
    },
    {
      arr: [-1, -100, 3, 99],
      k: 2,
      result: [3, 99, -1, -100],
    },
    {
      arr: [1, 2, 3, 4, 5, 6],
      k: 2,
      result: [5, 6, 1, 2, 3, 4],
    },
    {
      arr: [],
      k: 2,
      result: [],
    },
    {
      arr: [1, 2, 3, 4, 5],
      k: 0,
      result: [1, 2, 3, 4, 5],
    },
  ])("$arr and $k should return $result", ({ arr, k, result }) => {
    rotateArray(arr, k);
    expect(arr).toEqual(result);
  });
});
