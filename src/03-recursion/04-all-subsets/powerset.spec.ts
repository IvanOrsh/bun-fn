import { describe, it, expect } from "bun:test";

import { powersetIter, powersetRec } from "./powerset";

describe("Test powersetIter", () => {
  it.each([
    {
      arr: [1, 2, 3],
      result: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    for (const item of result) {
      powersetIter(arr).includes(item);
    }
  });
});

describe("Test powersetRec", () => {
  it.each([
    {
      arr: [1, 2, 3],
      result: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    for (const item of result) {
      powersetRec(arr).includes(item);
    }
  });
});
