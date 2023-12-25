import { describe, it, expect } from "bun:test";

import { maxAreaBrute, maxArea } from "./container-with-most-water";

describe("Test maxAreaBrute", () => {
  it.each([
    {
      height: [1, 5, 6, 3, 4],
      result: 12,
    },
    {
      height: [],
      result: 0,
    },
    {
      height: [10],
      result: 0,
    },
    {
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      result: 49,
    },
    {
      height: [1, 1],
      result: 1,
    },
    {
      height: [4, 3, 2, 1, 4],
      result: 16,
    },
    {
      height: [1, 2, 1],
      result: 2,
    },
  ])("$height should return $result", ({ height, result }) => {
    const res = maxAreaBrute(height);
    expect(res).toEqual(result);
  });
});

describe("Test maxArea", () => {
  it.each([
    {
      height: [1, 5, 6, 3, 4],
      result: 12,
    },
    {
      height: [],
      result: 0,
    },
    {
      height: [10],
      result: 0,
    },
    {
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      result: 49,
    },
    {
      height: [1, 1],
      result: 1,
    },
    {
      height: [4, 3, 2, 1, 4],
      result: 16,
    },
    {
      height: [1, 2, 1],
      result: 2,
    },
  ])("$height should return $result", ({ height, result }) => {
    const res = maxArea(height);
    expect(res).toEqual(result);
  });
});
