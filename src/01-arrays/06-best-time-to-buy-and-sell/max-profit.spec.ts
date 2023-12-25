import { describe, it, expect } from "bun:test";

import { maxProfitBrute, maxProfit } from "./max-profit";

describe("Test maxProfitBrute", () => {
  it.each([
    {
      prices: [7, 1, 5, 3, 6, 4],
      result: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      result: 0,
    },
  ])("$prices should return $result", ({ prices, result }) => {
    const res = maxProfitBrute(prices);
    expect(res).toEqual(result);
  });
});

describe("Test maxProfit", () => {
  it.each([
    {
      prices: [7, 1, 5, 3, 6, 4],
      result: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      result: 0,
    },
  ])("$prices should return $result", ({ prices, result }) => {
    const res = maxProfit(prices);
    expect(res).toEqual(result);
  });
});
