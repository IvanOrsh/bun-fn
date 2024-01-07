import { describe, it, expect } from "bun:test";

import { radixSort } from "./radix";

describe("Test radixSort", () => {
  it.each([
    { arr: [], result: [] },
    {
      arr: [1],
      result: [1],
    },
    {
      arr: [5, 4, 3, 2, 1],
      result: [1, 2, 3, 4, 5],
    },
    {
      arr: [123, 79, 63, 19, 5],
      result: [5, 19, 63, 79, 123],
    },
    {
      arr: [1, 2, 3, 4, 5],
      result: [1, 2, 3, 4, 5],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    radixSort(arr);
    expect(arr).toEqual(result);
  });
});
