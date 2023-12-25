import { describe, it, expect } from "bun:test";

import { isMonotonicArray } from "./is-monotonic-array";

describe("Test isMonotonicArray", () => {
  it.each([
    {
      arr: [],
      result: true,
    },
    {
      arr: [7],
      result: true,
    },
    {
      arr: [7, 7, 7],
      result: true,
    },
    {
      arr: [1, 2, 3, 4, 5],
      result: true,
    },
    {
      arr: [1, 2, 2, 7],
      result: true,
    },
    {
      arr: [6, 3, 1, -1],
      result: true,
    },
    {
      arr: [6, 4, 4, 4, -1],
      result: true,
    },
    {
      arr: [5, -1, 0, 2],
      result: false,
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const res = isMonotonicArray(arr);
    expect(res).toEqual(result);
  });
});
