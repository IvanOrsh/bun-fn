import { describe, it, expect } from "bun:test";

import { ValidToken, rpn } from "./rpn";

describe("Test rpn", () => {
  it.each([
    {
      tokens: [1, 2, "+"],
      result: 3,
    },
    {
      tokens: [5, 6, 4, "/", "+", 1, "-"],
      result: 5,
    },
  ])("$tokens should return $result", ({ tokens, result }) => {
    const res = rpn(tokens as ValidToken[]);

    expect(res).toEqual(result);
  });
});
