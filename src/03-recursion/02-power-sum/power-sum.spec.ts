import { describe, it, expect } from "bun:test";

import { powerSum } from "./power-sum";

describe("Test powerSum", () => {
  it.each([
    {
      pecArr: [1, 2, 3],
      result: 6,
    },
    {
      pecArr: [1, 2, [3]],
      result: 1 + 2 + 3 ** 2,
    },
    {
      pecArr: [1, 2, [3, 4], [[2]]],
      result: 1 + 2 + (3 + 4) ** 2 + (2 ** 3) ** 2,
    },
    {
      pecArr: [2, 3, [4, 1, 2]],
      result: 2 + 3 + (4 + 1 + 2) ** 2,
    },
    {
      pecArr: [1, 2, [7, [3, 4], 2]],
      result: 123907,
    },
  ])("$pecArr should return $result", ({ pecArr, result }) => {
    const res = powerSum(pecArr);
    expect(res).toEqual(result);
  });
});
