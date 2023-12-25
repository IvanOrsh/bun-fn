## Question

You are given an integer array 'height' of length n.
There are n vertical lines drawn such that the two endpoints of the ith line are `(i, 0)` and `(i, height[i])`.
Find two lines that together with the x-axis form a container, such that the container contains the most water (depth is constant across containers).
Return the area (that the 2 lines and the X axis make ) of container which can store the max amount fo water.
Note: You may not slant the container.

      0  1  2  3  4

ex: `[1, 5, 6, 3, 4]`

1 line: (0, 0) (0, 1)
2 line: (1, 0) (1, 5)
3 line: (2, 0) (2, 6)
4 line: (3, 0) (3, 3)
5 line: (4, 0) (4, 4)

```txt

      6
   5  |
   |__|_   _4
   |  |  3  |
   |  |  |  |
1  |  |  |  |
|  |  |  |  |
-------------------------->x
0  1  2  3  4  5
```

- Does Y axis count as a wall? - No
- Does a line inside a container affect area? - No
- Line thickness matters? - No

### Hint: 2 shifting pointers method

The "two-shifting pointers" method is a technique used in array manipulation algorithms. It involves using two pointers to traverse and manipulate the elements of an array. The two pointers are typically initialized at different positions and can move in opposite directions or in the same direction, depending on the problem requirements.

This method is often used to solve problems that involve rearranging or manipulating elements in an array, such as reversing an array, finding pairs with a specific sum, or removing duplicates. By moving the pointers strategically, you can perform operations on the array efficiently without requiring additional data structures.

The two-shifting pointers method is particularly useful when dealing with sorted or partially sorted arrays, as it allows you to compare and manipulate elements while maintaining the order or achieving the desired arrangement.

Overall, the two-shifting pointers method is a versatile technique in array manipulation algorithms that can help solve various problems efficiently by leveraging the positions and movements of two pointers within the array.
