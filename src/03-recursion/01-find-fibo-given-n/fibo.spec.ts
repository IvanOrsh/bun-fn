import { expect, describe, it } from "bun:test";

import { fiboRec, fiboMemo, fiboIter } from "./fibo";

describe("Test fiboRec", () => {
  it.each([
    { n: 0, result: 0 },
    { n: 1, result: 1 },
    { n: 2, result: 1 },
    { n: 3, result: 2 },
    { n: 4, result: 3 },
    { n: 5, result: 5 },
    { n: 6, result: 8 },
    { n: 7, result: 13 },
    { n: 8, result: 21 },
  ])("$n should return $result", ({ n, result }) => {
    const res = fiboRec(n);
    expect(res).toEqual(result);
  });
});

describe("Test fiboMemo", () => {
  it.each([
    { n: 0, result: 0 },
    { n: 1, result: 1 },
    { n: 2, result: 1 },
    { n: 3, result: 2 },
    { n: 4, result: 3 },
    { n: 5, result: 5 },
    { n: 6, result: 8 },
    { n: 7, result: 13 },
    { n: 8, result: 21 },
  ])("$n should return $result", ({ n, result }) => {
    const res = fiboMemo(n);
    expect(res).toEqual(result);
  });
});

describe("Test fiboIter", () => {
  it.each([
    { n: 0, result: 0 },
    { n: 1, result: 1 },
    { n: 2, result: 1 },
    { n: 3, result: 2 },
    { n: 4, result: 3 },
    { n: 5, result: 5 },
    { n: 6, result: 8 },
    { n: 7, result: 13 },
    { n: 8, result: 21 },
  ])("$n should return $result", ({ n, result }) => {
    const res = fiboIter(n);
    expect(res).toEqual(result);
  });
});
