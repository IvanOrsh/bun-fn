import { describe, it, expect } from "bun:test";

import { twoSum } from "./two-sum";

describe("Test twoSum", () => {
  it.each([
    {
      numbers: [2, 7, 11, 15],
      target: 9,
      result: [1, 2],
    },
    {
      numbers: [2, 3, 4],
      target: 6,
      result: [1, 3],
    },
    {
      numbers: [-1, 0],
      target: -1,
      result: [1, 2],
    },
  ])("$numbers should return $result", ({ numbers, target, result }) => {
    const res = twoSum(numbers, target);
    expect(res).toEqual(result);
  });
});
