## Diameter of Binary Tree

Write a function which takes in the root of a binary tree and returns the length of the diameter of the tree.

The diameter of a binary tree is the **length of the longest path between any two nodes** in a tree.

It is not necessary for this path to pass through the root of the tree.

The length of a path between two nodes is the number of edges between them.

```txt
            1
           / \
          2   3
            3/ \4
            4   5
          2/     \5
          6       7
        1/         \6
     -> 8           9 <-
         diameter = 6

```

```txt

            1
          3/ \4
          2   3
        2/ \
        4   5
      1/
      6

      diameter = 4
```

```txt

      1
     / \
  null  null

  diameter = 0

```
