import { describe, expect, it } from "bun:test";

import { isPalindromeBrute, isPalindrome } from "./is-palindrome";

describe("Test isPalindromeBrute", () => {
  it.each([
    // {
    //   str: "A man, a plan, a canal: Panama",
    //   result: true,
    // },
    // {
    //   str: "race a car",
    //   result: false,
    // },

    {
      str: "t",
      result: true,
    },
    {
      str: "malayalam",
      result: true,
    },

    {
      str: "aa",
      result: true,
    },

    {
      str: "aA",
      result: false,
    },

    {
      str: "racecar",
      result: true,
    },

    {
      str: "racecars",
      result: false,
    },
  ])("$str should return $result", ({ str, result }) => {
    const res = isPalindromeBrute(str);
    expect(res).toEqual(result);
  });
});

describe("Test isPalindrome", () => {
  it.each([
    {
      str: "t",
      result: true,
    },
    {
      str: "malayalam",
      result: true,
    },

    {
      str: "aa",
      result: true,
    },

    {
      str: "aA",
      result: false,
    },

    {
      str: "racecar",
      result: true,
    },

    {
      str: "racecars",
      result: false,
    },
  ])("$str should return $result", ({ str, result }) => {
    const res = isPalindrome(str);
    expect(res).toEqual(result);
  });
});
