import { describe, it, expect } from "bun:test";

import { groupAnagrams } from "./group-anagrams";

describe("Test groupAnagrams", () => {
  it.each([
    {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
      result: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    },
  ])("$strs should return $result", ({ strs, result }) => {
    const res = groupAnagrams(strs).flatMap((x) => x);
    const resutlFlat = result.flatMap((x) => x);

    for (const item of res) {
      expect(resutlFlat).toContain(item);
    }
  });
});
