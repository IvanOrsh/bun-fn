import { describe, it, expect } from "bun:test";

import { trap } from "./trap";

describe("Test trap", () => {
  it.each([
    {
      height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      result: 6,
    },
    {
      height: [4, 2, 0, 3, 2, 5],
      result: 9,
    },
  ])("$height should return $result", ({ height, result }) => {
    const res = trap(height);
    expect(res).toEqual(result);
  });
});
