import { describe, it, expect } from "bun:test";

import { searchRotatedSorted } from "./search-rotated-sorted";

describe("Test searchRotatedSorted", () => {
  it.each([
    {
      arr: [],
      target: 10,
      result: -1,
    },

    {
      arr: [3, 4, 5, 1, 2],
      target: 3,
      result: 0,
    },

    {
      arr: [4, 5, 6, 7, 0, 1, 2],
      target: 0,
      result: 4,
    },
    {
      arr: [4, 5, 6, 7, 0, 1, 2],
      target: 3,
      result: -1,
    },
  ])("$arr should return $result", ({ arr, target, result }) => {
    const res = searchRotatedSorted(arr, target);
    expect(res).toEqual(result);
  });
});
