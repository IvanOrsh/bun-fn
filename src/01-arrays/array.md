## Arrays

### Static Array

#### What is a Static Array

A **static array** is a fixed length container containing `n` elements **indexable** from the range `[0, n- 1]`.

(**Indexable** - each slot/index in the array can be referenced with a number).

#### When and where is a static Array used?

1. Storing and accessing sequential data.
2. Temporarily storing objects.
3. Used by IO routines as **buffers**.
4. Lookup tables and inverse lookup tables.
5. Can be used to return multiple values from a function.
6. Used in dynamic programming to cache answers to subproblems.

### Dynamic Array

#### How can we implement a Dynamic Array?

1. One way is to use a **static array** and expand it as needed:
   1. Create a static array with an initial capacity.
   2. Add elements to the underlying static array, keeping track of the number of elements.
   3. If adding another element will exceed the capacity, then create a new static array with twice the capacity and copy the original elements into it.

### Array common operations Big O

- Static arrays
- Dynamic arrays (in JS arrays are dynamic )

1. Access - S, T = O(1)
2. Set - T = O(n), S = O(1)
3. Traverse / Search - T = O(n), S = O(1)
4. Copy - S, T = O(N)
5. Insert (S = O(1))
   1. at beginning - T = O(n)
   2. at end - O(n) for static, O(1) for dynamic
   3. somewhere in between - O(n)
6. Remove (S = O(1))
   1. at beginning - O(n)
   2. at end - O(1)
   3. somewhere in between - O(n)

### List of problems

1. [Sorted Squared Array](01-sorted-squared-array/question.md), [Solution](01-sorted-squared-array/arr-sorted-squared.ts)
2. [Monotonic Array](02-monotonic-array/question.md), [Solution](02-monotonic-array/is-monotonic-array.ts)
3. [Rotate an Array](03-rotate-array/question.md), [Solution](03-rotate-array/rotate-array.ts)
4. [Container with Most Water](04-container-with-most-water/question.md), [Solution](04-container-with-most-water/container-with-most-water.ts)
5. [Max Sum Subarray](05-max-sum-subarray/question.md), [Solution](05-max-sum-subarray/max-subarray.ts)
6. [Best Time to Buy and Sell](06-best-time-to-buy-and-sell/question.md), [Solution](06-best-time-to-buy-and-sell/max-profit.ts)
7. [Majority Element](07-majority-element/question.md), [Solution](07-majority-element/majority-element.ts)
8. [Move Zeroes](08-move-zeroes/question.md), [Solution](08-move-zeroes/moveZeroes.ts)
9. [Two Sum II](09-two-sum-2-input-arr-is-sorted/question.md), [Solution](09-two-sum-2-input-arr-is-sorted/two-sum.ts)
10. [Trap Rain Water](10-trapping-rain-water/question.md), [Solution](10-trapping-rain-water/trap.ts)
