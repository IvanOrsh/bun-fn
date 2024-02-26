## Binary Heaps

### What is a Binary Heap?

A **binary heap** is

- a specialized tree-based data structure
- that maintains a (nearly) **almost complete binary tree** (at most 2 children per node, **CANNOT BE ONE-SIDED**, is filled in the left-to-right order)
- with the additional constraint that it adheres to the **heap property** (max binary heap and min binary heap)

### Max Binary Heap amd Min Binary Heap (Heap Property)

1. Max Binary heap -> parent node is larger than child node

2. Min Binary heap -> parent node is smaller than child node

3. No ordering between siblings

### Represent a Binary Heap as an array

```txt

               95
           /         \                  to find child index of parent (n - index of parent):
          50          45                       index n
        /   \       /    \                  /           \
      21    22     30    35             2*n + 1         2*n + 2
    /  \  /  \    / \    / \            ------------------------------
  19  20 15  16 25  26  34  33          to find parent index from child (n - index of child):

                                        floor( (n - 1) / 2 )

 0   1   2   3   4   5   6   7   8   9  10  11  12  13   14
[95, 50, 45, 21, 22, 30, 35, 19, 20, 15 16, 25,  26, 34, 33]
             ^
example: children of element 21 (index 3) -> index(2 * 3 + 1 = 7) = 19  index(2 * 3 + 2 = 8) = 20, which is correct

```

### Range of Leaves and internal nodes

```txt

indices of leaves = floor(N / 2) to N - 1

indices of internal nodes = 0 to floor(n / 2) - 1

example:

 0   1   2   3   4   5   6   7   8   9  10  11  12  13   14
[95, 50, 45, 21, 22, 30, 35, 19, 20, 15 16, 25,  26, 34, 33]
 ^                        ^   ^                           ^
|-------------------------|   |---------------------------|
   internal nodes                        leaves

0 to floor(15 / 2) - 1 = 6       floor(15 / 2) = 7 to 15 - 1 = 14
```

### Big O of common operations

| operation             | complexity                              |
| --------------------- | --------------------------------------- |
| removal / bubble down | T = (log(n)) best, avg, worst, S = O(1) |
| insertion / bubble up | T = (log(n)) best, avg, worst, S = O(1) |
| searching             | T = O(n), S = O(1)                      |
| build heap from array | T = O(n), S = O(1)                      |

### Priority Queue

- A data structure where each element has a priority
- **Generally, PQ is implemented with Heap**
- Every node:
  - value
  - priority
- We will **heapify based on priority**
- Two types:
  - Max priority queue - first return element with max priority
  - Min priority queue - first return element with min priority

### Big O of common operations of Priority Queue

| operation         | complexity                               |
| ----------------- | ---------------------------------------- |
| removal           | T = (log(n)), best, avg, worst, S = O(1) |
| insertion         | T = (log(n)), best, avg, worst, S = O(1) |
| peak at max / min | T = O(1), S = O(1)                       |

### List of Problems:

1. [Construct Max Binary Heap](01-construct-max-binary-heap/question.md), [Solution](01-construct-max-binary-heap/max-binary-heap.ts)
2. [Construct Priority Queue](02-construct-priority-queue/question.md), [Solution](02-construct-priority-queue/min-priority-queue.ts)
