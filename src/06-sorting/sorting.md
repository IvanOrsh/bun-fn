## Sorting alogorithms

### Introduction

Sorting is the process of arranging a collection of elements in a specific order. It is a fundamental operation in computer science and is used in various algorithms and applications.

There are many different sorting algorithms, each with its own advantages and disadvantages. Here are some commonly used sorting algorithms:

### Bubble Sort:

This algorithm repeatedly compares adjacent elements and swaps them if they are in the wrong order. It continues this process until the entire collection is sorted. Bubble Sort has a time complexity of O(n^2) in the worst case.

### Selection Sort:

This algorithm divides the collection into two parts: the sorted part and the unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the first element of the unsorted part. Selection Sort also has a time complexity of O(n^2) in the worst case.

### Insertion Sort:

This algorithm builds the final sorted array one element at a time. It takes each element from the input and inserts it into its correct position in the sorted array. Insertion Sort performs well for small-sized or nearly sorted collections, with a time complexity of O(n^2) in the worst case.

### Merge Sort:

This algorithm follows the divide-and-conquer approach. It divides the collection into smaller subproblems, recursively sorts them, and then merges the sorted subproblems to produce the final sorted collection. Merge Sort has a time complexity of O(n log n) in all cases.

### Quick Sort:

This algorithm also uses the divide-and-conquer approach. It selects a pivot element and partitions the collection around the pivot, such that all elements less than the pivot come before it, and all elements greater than the pivot come after it. It then recursively applies the same process to the subproblems on either side of the pivot. Quick Sort has an average time complexity of O(n log n), but can degrade to O(n^2) in the worst case.

### Conclusion

These are just a few examples of sorting algorithms. There are many other algorithms, each with its own trade-offs in terms of time complexity, space complexity, stability, and adaptability to different input scenarios. The choice of sorting algorithm depends on the specific requirements of the problem at hand.

### List of problems:

1. [Bubble Sort](01-bubble/question.md), [Solution](01-bubble/bubble.ts)
2. [Insertion Sort](02-insert/question.md), [Solution](02-insert/insert.ts)
3. [Selection Sort](03-select/question.md), [Solution](03-select/select.ts)
4. [Merge Sort](04-merge/question.md), [Solution](04-merge/merge.ts)
