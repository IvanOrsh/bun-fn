## Search alogorithms

### Linear Search:

Linear search is a simple search algorithm that sequentially checks each element in a list or array until the target element is found or the end of the list is reached.

It has a time complexity of O(n), where n is the size of the list.

### Binary Search:

Binary search is an efficient search algorithm that works on sorted lists or arrays.
It repeatedly divides the search space in half by comparing the target element with the middle element of the sorted list.
If the target element is smaller, the search continues in the lower half; if the target element is larger, the search continues in the upper half.
It has a time complexity of O(log n), where n is the size of the list.

### Depth-First Search (DFS):

DFS is an algorithm that explores a graph or tree by traversing as far as possible along each branch before backtracking.
It uses a stack (either explicit or implicit) to keep track of the visited nodes.
DFS is often used to find a path between two nodes, determine connectivity, or explore all possible solutions in a search space.

### Breadth-First Search (BFS):

BFS is an algorithm that explores a graph or tree by visiting all the neighboring nodes at the present depth before moving on to nodes at the next depth level.
It uses a queue to keep track of the nodes to visit in a specific order.
BFS is often used to find the shortest path between two nodes, find connected components, or explore a search space with uniform cost.

### A\* Search:

A* (pronounced "A-star") is a popular informed search algorithm used in pathfinding and graph traversal.
It combines elements of both breadth-first search and heuristic evaluation to find the shortest path efficiently.
A* uses a priority queue to explore nodes with a combination of the cost to reach the node and an estimated cost to the goal.
The estimated cost is usually calculated using a heuristic function that provides an optimistic estimate of the remaining cost.

### Binary Search Tree (BST):

A binary search tree is a binary tree data structure in which the left child is always smaller than the parent, and the right child is always larger.
It allows for efficient search, insertion, and deletion operations.
The time complexity of operations on a balanced BST is O(log n), where n is the number of elements in the tree.

### Conclusion

These are just a few examples of search algorithms commonly used in various scenarios. The choice of search algorithm depends on the specific problem and data structure being used.

### List of problems:

1. [Binary Search: iter, rec](01-binary-search/question.md), [Solution](01-binary-search/binary-search.ts)
2. [Search in Rotated Sorted Array](02-search-in-roteated-sorted-arr/question.md), [Solution](02-search-in-roteated-sorted-arr/search-rotated-sorted.ts)
3. [Search for Range](03-search-for-range/question.md), [Solution](03-search-for-range/search-for-range.ts)
