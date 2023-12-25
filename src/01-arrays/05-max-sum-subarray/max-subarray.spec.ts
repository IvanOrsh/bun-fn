import { describe, it, expect } from "bun:test";

import { maxSubArray } from "./max-subarray";

describe("Test maxSubArray", () => {
  it.each([
    {
      nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      result: 6,
    },
    {
      nums: [1],
      result: 1,
    },
    {
      nums: [5, 4, -1, 7, 8],
      result: 23,
    },
    {
      nums: [-2, 1],
      result: 1,
    },
    {
      nums: [-2, -1],
      result: -1,
    },
  ])("$nums should return $result", ({ nums, result }) => {
    const res = maxSubArray(nums);
    expect(res).toEqual(result);
  });
});
