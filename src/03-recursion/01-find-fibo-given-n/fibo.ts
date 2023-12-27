export function fiboRec(n: number): number {
  /*
  T = O(2^n)
  - at each F() we are calling 2 more F()
  - this happens almost n times
  */
  if (n < 2) return n;

  return fiboRec(n - 1) + fiboRec(n - 2);
}

export function fiboMemo(n: number): number {
  /*
  T = O(n)
  S = O(n)
  */

  /*
  const memo = [0, 1];

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
  */

  const ht: Record<number, number> = { 0: 0, 1: 1 };
  if (n in ht) return ht[n];

  return (ht[n] = fiboMemo(n - 1) + fiboMemo(n - 2));
}
