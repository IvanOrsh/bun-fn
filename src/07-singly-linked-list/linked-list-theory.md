## Linked List

### What is a Linked List?

A **linked list** is a sequential list of nodes that hold data which point to other nodes also containing data.

### Where are linked lists used?

1. Used in many List, Queue & Stack implementations.
2. Great for creating circular lists (to model repeating events, like round-robin, and so on...).
3. Can easily model real world objects such as trains.
4. Used in separate chaining, which is present certain Hashtable implementations to deal with hashing collisions.
5. Often used in the implementation of adjacency lists for graphs.

### Terminology

- **Head**: the first node in a linked list.
- **Tail**: the last node in a linked list.
- **Pointer**: reference to another node.
- **Node**: an object containing data and pointer(s)

```txt
   3 ---> 84 ---> 85 ----> 31 -----> 90 ------> 29 -----> 44 ---> null
   ^          ^                      ^                    ^
head      pointer                  node                 tail
```

### Singly vs. Double Linked Lists

| Feature                    | Singly Linked List                                                                        | Doubly Linked List                                                        |
| -------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Node Structure             | Contains data and a reference to next node                                                | Contains data, a reference to next node, and a reference to previous node |
| Traversal                  | Forward-only traversal                                                                    | Forward and backward traversal                                            |
| Memory Efficiency          | Requires less memory due to single reference per node                                     | Requires more memory due to two references per node                       |
| Insertion/Deletion at Head | O(1) time complexity                                                                      | O(1) time complexity                                                      |
| Insertion/Deletion at Tail | O(n) time complexity (without tail reference), O(1) time complexity (with tail reference) | O(1) time complexity                                                      |
| Implementation Complexity  | Generally simpler to implement                                                            | Slightly more complex due to management of previous references            |

### Some implementation details

- insert an element at some index:
  - get the reference to the head
  - and traverse it to that index but keep track of the previous node
  - create a new node and insert it in between the two nodes (by change the pointers)

for singly linked list:

```txt

5  ------> 23        7 ------> 13
^           | \    /           ^
head        |   11            tail
          trav

```

for doubly linked list we have to change 4 pointers
