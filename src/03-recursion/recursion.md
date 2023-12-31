## Recursion

Recursion is a programming technique where a function calls itself to solve a problem by breaking it down into smaller, similar subproblems.
Each recursive call operates on a smaller subproblem **until a base case is reached**, at which point the recursion stops and the results are combined to solve the original problem.

### Example:

```ts
function factorial(n: number): number {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case: factorial of n is n multiplied by factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

### Use Cases

Recursion can also be used to solve problems with more complex structures, such as traversing trees or finding the Fibonacci sequence. However, it's important to **ensure that recursive functions have proper termination conditions and handle base cases effectively** to prevent infinite recursion.

### List of problems:

1. [Fibonacci, Find the Nth number](01-find-fibo-given-n/question.md), [Solution](01-find-fibo-given-n/fibo.ts)
2. [Power Sum](02-power-sum/question.md), [Solution](02-power-sum/power-sum.ts)
3. [Permutations](03-permutations/question.md), [Solution](03-permutations/permutations.ts)
4. [All subsets / powerset](04-all-subsets/question.md), [Solution](04-all-subsets/powerset.ts)
