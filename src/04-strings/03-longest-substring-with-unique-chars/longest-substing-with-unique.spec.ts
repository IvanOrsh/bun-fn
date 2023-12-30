import { describe, it, expect } from "bun:test";

import {
  longestSubstringLengthBrute,
  longestSubstringLength,
} from "./longest-substring-with-unique";

describe("Test longestSubstringLengthBrute", () => {
  it.each([
    {
      s: "abcabcbb",
      result: 3,
    },
    {
      s: "bbbbb",
      result: 1,
    },
    {
      s: "pwwkew",
      result: 3,
    },
    {
      s: "",
      result: 0,
    },
  ])("$s should return $result", ({ s, result }) => {
    const res = longestSubstringLengthBrute(s);
    expect(res).toEqual(result);
  });
});

describe("Test longestSubstringLength", () => {
  it.each([
    {
      s: "abcdef",
      result: 6,
    },
    {
      s: "abcabcbb",
      result: 3,
    },
    {
      s: "bbbbb",
      result: 1,
    },
    {
      s: "pwwkew",
      result: 3,
    },
    {
      s: "",
      result: 0,
    },
    {
      s: "pqbrstburwvxy",
      result: 9,
    },
  ])("$s should return $result", ({ s, result }) => {
    const res = longestSubstringLength(s);
    expect(res).toEqual(result);
  });
});
