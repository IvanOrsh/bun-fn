## Construct Max Binary Heap

### Heapify an element

We can heapify an element (at certain index) ONLY IF ALL ELEMENTS IN LEFT & RIGHT SUBTREES FOLLOW HEAP PROPERTY

```txt
-> 7 to follow heap property
           95
        /      \
    -> 7         45
    /   \       /    \
  21    22     30    35
  /\    /\     /\    /\
19 20 15 16  25 26  34 33


-> compare with biggest child (7 < 21) -> swap

           95
        /      \
      22          45
    /   \       /    \
  21  ->7       30    35
  /\    /\     /\    /\
19 20 15 16  25 26  34 33


-> compare with biggest child (7 < 16) -> swap

           95
        /      \
      22          45
    /   \       /    \
  21    16      30    35
  /\    /\     /\    /\
19 20 15  7  25 26  34 33
          ^
We have successfully bubbled down (or sifted) 7 to its correct position.
```

### Building From Array

Say, we are given an array: `[4, 7, 3, 0, 9, 3, 2, 6]`

```txt
indices of leaves = floor(N / 2) to N - 1
indices of internal nodes = 0 to floor(n / 2) - 1

BUILD

idx internal: from 0 to 3
idx leaves: 3 to 7

 0  1  2  3  4  5  6  7
[4, 7, 3, 0, 9, 3, 2, 6]
 ^        ^  ^        ^
  -------     --------
 internal      leaves

       4
     /   \
    7     3
   / \   / \
  0  9  3   2
 /
6

leaves: 6, 9, 3, 2 always follow heap property (because they don't have children)

now, we have to heapify the INTERNAL NODES

FOR INTERNAL NODES:
- heapify them from bottom up: 0, 3, 7, 4 (call the bubble down function in this order)


1.

       4
     /   \
    7     3
   / \   / \
->0  9  3   2
 /
6

compare with children (0 < 6 ) -> swap

2.
       4
     /   \
    7     3<-
   / \   / \
  6  9  3   2
 /
0

3 is in correct place


3.
       4
     /   \
  ->7     3
   / \   / \
  6  9  3   2
 /
0

compare with greatest child (7 < 9) -> swap

4.
       4<-
     /   \
    9     3
   / \   / \
  6  7  3   2
 /
0

5.

       9
     /   \
    4     3
   / \   / \
  6  7  3   2
 /
0

6.

       9
     /   \
    7     3
   / \   / \
  6  4  3   2
 /
0

result: [9, 7, 3, 6, 4, 3, 2, 0]
```

### Removing from Heap

The root node:

- max binary heap => max (the root node will be maximum)
- min binary heap => min

Say, we are given an max binary heap, that can be represented as an array: `[9, 7, 3, 6, 4, 3, 2, 0]`

```txt

1.
          9 <-- start here
         /  \
        7    3
      /  \  /  \
     6   4 3    2
    /
   0

Return 9 (root node), take the last element (0) and place it in the root position

2.

          0<--
         /  \
        7    3
      /  \  /  \
     6   4 3    2

Now, we will bubble down 0 (compare with max child, and swap if necessary)

3.

          7
         /  \
    -> 0    3
      /  \  /  \
     6   4 3    2

4.

          7
         /  \
        6    3
      /  \  /  \
   ->0   4 3    2

```

### Inserting into Heap

Say, we are given an max binary heap, that can be represented as an array: `[9, 7, 3, 6, 4, 3, 2, 0]`.

And we want to insert 20 into the heap.

What do we do:

1. Push 20 to the end of the array: `[9, 7, 3, 6, 4, 3, 2, 0, 20]`
2. **bubble up / sift up**

```txt
n - index of an element
parentIdx = floor( (n - 1) / 2 )

          9
         /  \
        7    3
      /  \  /  \
     6   4 3    2
    /
   0


1. push 20 to the end of the array:

           9
         /   \
        7     3
      /  \   /  \
     6   4  3    2
    /\
   0 20

compare with parent (20 > 6) -> swap

2.

           9
         /   \
        7     3
      /  \   /  \
    20   4  3    2
    /\
   0  6

compare with parent (20 > 7) -> swap

3.

           9
         /   \
       20     3
      /  \   /  \
    7   4  3    2
    /\
   0  6

compare with parent (20 > 7) -> swap

4.

           20
         /   \
        9     3
      /  \   /  \
    7   4  3    2
    /\
   0  6

Now, it is in the right position.
```

### Peeking at the heap's maximum / root value

Just return the root value.

### Summary

| Operation | Description                                                                    | Complexity             |
| --------- | ------------------------------------------------------------------------------ | ---------------------- |
| Build     | heapify internal nodes bottom up                                               | T = O(n), S = O(1)     |
| Insert    | insert at the end, bubble up                                                   | T = O(log n), S = O(1) |
| Remove    | remove from the beginning of the array, replace with last element, bubble down | T = O(log n), S = O(1) |
| Peek      | return the root (the first element of the array)                               | S, T = O(1)            |
