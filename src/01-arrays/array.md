## Arrays

### Data Structure

In computer science, a **data structure is a way of organizing and storing data in a computer's memory in a specific format**.
It provides a means to efficiently access, manipulate, and manage the data. Data structures can be simple or complex, depending on the requirements and the type of data being stored.

Common examples of data structures include:

- arrays,
- linked lists,
- stacks,
- queues,
- trees,
- graphs,
- and hash tables.

Each data structure has its own characteristics, operations, and trade-offs, and the choice of data structure depends on the specific problem and the desired performance and functionality.

### Array definition

- In computer science, an array is an abstract data structure that stores a fixed-size sequence of elements of the same type.
- It is a collection of elements, each identified by an index or a key.
- Arrays provide efficient random access to elements based on their index, allowing for constant-time retrieval.
- The elements in an array are typically stored in contiguous memory locations, which enables efficient traversal and manipulation.
- Arrays can be one-dimensional (a linear sequence of elements) or multi-dimensional (a matrix-like structure).

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
