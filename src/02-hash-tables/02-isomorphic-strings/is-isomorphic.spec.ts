import { describe, it, expect } from "bun:test";

import { isIsomorphic } from "./is-isomorphic";

describe("Test isIsomorphic", () => {
  it.each([
    {
      s: "egg",
      t: "add",
      result: true,
    },
    {
      s: "foo",
      t: "bar",
      result: false,
    },
    {
      s: "paper",
      t: "title",
      result: true,
    },
    {
      s: "abcdc",
      t: "pqrsr",
      result: true,
    },
    {
      s: "abcdc",
      t: "pqrsb",
      result: false,
    },
  ])("$s and $t should return $result", ({ s, t, result }) => {
    const res = isIsomorphic(s, t);
    expect(res).toEqual(result);
  });
});
