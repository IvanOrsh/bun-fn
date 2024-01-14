## Cycle Detection

You are given the head of a linked list.
Check if there is a cycle and if yes, return the node where the cycle begins.
If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Do not modify the values in the list's nodes.

Example:

null: null

1 -> 2 -> 3 -> null: null

1 -> 2 -> 3 -> 1: 1

**Might be useful...**

Floyd's Tortoise and Hare algorithm, also known as the cycle detection algorithm, is an algorithm used to detect cycles in a linked list or an array. It was named after Robert W. Floyd, who described the algorithm in 1967.

The algorithm uses two pointers, one moving at twice the speed of the other, to traverse the list or array. If there is a cycle, the faster pointer (the hare) will eventually catch up to the slower pointer (the tortoise), indicating the presence of a cycle. If there is no cycle, the faster pointer will reach the end of the list or array.

Here's how the algorithm works:

1. Initialize two pointers, the tortoise and the hare, to the head of the list or array.
2. Move the tortoise one step at a time and the hare two steps at a time.
3. If the hare reaches the end of the list or array (i.e., it encounters a null or undefined value), there is no cycle, and the algorithm terminates.
4. If the hare and tortoise meet (i.e., their references are the same), there is a cycle in the list or array.
5. Once a meeting point is found, the algorithm determines the start of the cycle by moving the hare back to the head of the list or array and then moving both the hare and tortoise one step at a time. The point at which they meet again is the start of the cycle.

Floyd's Tortoise and Hare algorithm is an efficient way to detect cycles in a linked list or array, and it has a time complexity of O(n), where n is the number of elements in the list or array.

This algorithm is commonly used in various scenarios, such as detecting loops in a linked list, finding duplicate elements in an array, and solving problems related to cycle detection and cycle length.
