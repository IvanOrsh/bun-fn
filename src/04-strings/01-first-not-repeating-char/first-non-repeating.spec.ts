import { describe, it, expect } from "bun:test";

import {
  firstNonRepeatingCharBrute,
  firstNonRepeatingCharMap,
} from "./first-non-repeating";

describe("Test firstNonRepeatingChar", () => {
  it.each([
    {
      s: "leetcode",
      result: 0,
    },
    {
      s: "loveleetcode",
      result: 2,
    },
    {
      s: "aabb",
      result: -1,
    },
  ])("$s should return $result", ({ s, result }) => {
    const res = firstNonRepeatingCharBrute(s);
    expect(res).toEqual(result);
  });
});

describe("Test firstNonRepeatingCharMap", () => {
  it.each([
    {
      s: "leetcode",
      result: 0,
    },
    {
      s: "loveleetcode",
      result: 2,
    },
    {
      s: "aabb",
      result: -1,
    },
    {
      s: "abAA1ac",
      result: 1,
    },
  ])("$s should return $result", ({ s, result }) => {
    const res = firstNonRepeatingCharMap(s);
    expect(res).toEqual(result);
  });
});
