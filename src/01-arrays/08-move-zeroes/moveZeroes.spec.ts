import { expect, it, describe } from "bun:test";

import { moveZeroes } from "./moveZeroes";

describe("Test moveZeroes", () => {
  it.each([
    {
      nums: [0, 1, 0, 3, 12],
      result: [1, 3, 12, 0, 0],
    },
    {
      nums: [0],
      result: [0],
    },
  ])("$nums should return $result", ({ nums, result }) => {
    moveZeroes(nums);
    expect(nums).toEqual(result);
  });
});
