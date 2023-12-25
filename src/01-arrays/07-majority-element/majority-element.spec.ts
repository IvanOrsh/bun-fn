import { describe, it, expect } from "bun:test";

import { majorityElement } from "./majority-element";

describe("Test majorityElement", () => {
  it.each([
    {
      arr: [2, 2, 1, 1, 1, 2, 2],
      result: 2,
    },
    {
      arr: [3, 3, 4],
      result: 3,
    },
    {
      arr: [1],
      result: 1,
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const res = majorityElement(arr);
    expect(res).toEqual(result);
  });
});
