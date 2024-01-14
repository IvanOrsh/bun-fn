import { describe, it, expect } from "bun:test";

import { findDuplicate } from "./find-duplicate";

describe("Test findDuplicate", () => {
  it.each([
    {
      nums: [1, 3, 4, 2, 2],
      result: 2,
    },
    {
      nums: [3, 1, 3, 4, 2],
      result: 3,
    },
    {
      nums: [5, 4, 3, 1, 2, 3],
      result: 3,
    },
  ])("$nums should return $result", ({ nums, result }) => {
    const res = findDuplicate(nums);
    expect(res).toEqual(result);
  });
});
