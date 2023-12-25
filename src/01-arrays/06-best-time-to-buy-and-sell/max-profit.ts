export function maxProfitBrute(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length - 1; j++) {
      maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
    }
  }

  return maxProfit;
}

export function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }

  return maxProfit;
}
