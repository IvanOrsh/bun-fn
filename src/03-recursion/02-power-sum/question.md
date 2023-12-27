## Power Sum

Let's define a peculiar type of array in which each element is either an integer or another peculiar array.
Assume that the array will always contain at least one element.

Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is a peculiar array, the sum of its elements will be the sum of the sums of its elements (we call it equivalent value). Equivalent value of an array is the sum of its elements **raised to the number which represents how far nested it is**.

Example:

```
[2, 3, [4, 1, 2]] = 2 + 3 + (4 + 1 + 2) ^ 2

[1, 2, [7, [3, 4], 2]] = 1 + 2 + (7 + (3 + 4) ^3 + 2) ^ 2
```
