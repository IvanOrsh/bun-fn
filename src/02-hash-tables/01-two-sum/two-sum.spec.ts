import { describe, it, expect } from "bun:test";

import { twoSumBrute, twoSum } from "./two-sum";

describe("Test twoSumBrute", () => {
  it.each([
    {
      numbers: [2, 7, 3, -1, 4],
      target: 25,
      result: [],
    },
    {
      numbers: [2, 7, 3, -1, 4],
      target: 2,
      result: [2, 3],
    },
    {
      numbers: [2, 7, 11, 15],
      target: 9,
      result: [0, 1],
    },
    {
      numbers: [2, 3, 4],
      target: 6,
      result: [0, 2],
    },
    {
      numbers: [-1, 0],
      target: -1,
      result: [0, 1],
    },
  ])("$numbers should return $result", ({ numbers, target, result }) => {
    const res = twoSumBrute(numbers, target);
    expect(res).toEqual(result);
  });
});

describe("Test twoSum", () => {
  it.each([
    {
      numbers: [2, 7, 3, -1, 4],
      target: 25,
      result: [],
    },
    {
      numbers: [2, 7, 3, -1, 4],
      target: 2,
      result: [2, 3],
    },
    {
      numbers: [2, 7, 11, 15],
      target: 9,
      result: [0, 1],
    },
    {
      numbers: [2, 3, 4],
      target: 6,
      result: [0, 2],
    },
    {
      numbers: [-1, 0],
      target: -1,
      result: [0, 1],
    },
  ])("$numbers should return $result", ({ numbers, target, result }) => {
    const res = twoSum(numbers, target);
    expect(res).toEqual(result);
  });
});
