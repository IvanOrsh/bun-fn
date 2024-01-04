import { describe, it, expect } from "bun:test";

import { insertSort } from "./insert";

describe("Test insertSort", () => {
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
    insertSort(arr);
    expect(arr).toEqual(result);
  });
});
