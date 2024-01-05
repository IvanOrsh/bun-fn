import { describe, it, expect } from "bun:test";

import { mergeSortedArrays, mergeSort } from "./merge";

describe("Test mergeSortedArrays", () => {
  it.each([
    { arr1: [], arr2: [], result: [] },
    { arr1: [1], arr2: [], result: [1] },
    { arr1: [], arr2: [1], result: [1] },
    { arr1: [1], arr2: [1], result: [1, 1] },
    { arr1: [1, 2, 3], arr2: [4, 5, 6], result: [1, 2, 3, 4, 5, 6] },
    { arr1: [1, 2, 3], arr2: [1, 2, 3], result: [1, 1, 2, 2, 3, 3] },
    { arr1: [], arr2: [3, 7, 9], result: [3, 7, 9] },
  ])("$arr1 and $arr2 should return $result", ({ arr1, arr2, result }) => {
    const res = mergeSortedArrays(arr1, arr2);
    expect(res).toEqual(result);
  });
});

describe("Test mergeSort", () => {
  it.each([
    { arr: [], result: [] },
    {
      arr: [1],
      result: [1],
    },
    {
      arr: [-1, 1000, 0, 10, 5, -17, 9, -2],
      result: [-17, -2, -1, 0, 5, 9, 10, 1000],
    },
    {
      arr: [5, 4, 3, 2, 1],
      result: [1, 2, 3, 4, 5],
    },
    {
      arr: [1, 2, 3, 4, 5],
      result: [1, 2, 3, 4, 5],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const res = mergeSort(arr);
    expect(res).toEqual(result);
  });
});
