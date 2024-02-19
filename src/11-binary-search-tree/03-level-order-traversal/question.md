## Level Order Traversal

Write a function that takes the root of a binary tree, and returns the level order traversal of its nodes' values (i.e., from left to right, level by level).

Initially write an instance method for the Binary Search tree class to insert the values given as an array into the Binary tree (from left to right, level by level). Each value in the array which is not null is to be made a node and added to the tree.

**For insert method**:

`insert([1, 2, 3, 4, 5])`

```txt
      1
    /   \
   2     3
 /  \
4    5
```

answer: `[[1], [2, 3], [4, 5]]`

---

`insert([1, 2, 3, null, 4, 5])`

```txt
       1
    /     \
   2       3
    \     /
     4   5
```

answer: `[[1], [2, 3], [4, 5]]`

---

Examples: `[[7], [11,1], [5,3,9]]`

```txt
         7
     /     \
    11      1
   /  \    /  \
null    5 3    9
```

Example: `[[7]]`, if there is just one node (root node). (for example, 7)
Example: `[]`, if the tree is empty
