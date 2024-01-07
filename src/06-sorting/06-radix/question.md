## Radix sort

Your are given an array of **non-negative** integers. Write a function that will take this array as input and return the sorted array using Radix sort.

### Counting Sort:

- stable sort algorithm

1. Find the minimum and maximum values in the input array. This step helps **determine the range of values that need to be sorted**.

2. Create a **count array to store the count of each unique element in the input array**. The size of the count array is determined by the range of values found in step 1. Initialize all the count array elements to 0.

3. Traverse the input array and update the count array. For each element in the input array, increment the corresponding count array element by 1. This step counts the occurrences of each unique element in the input array.

4. Modify the count array to store the **cumulative sum of the counts**. This step helps **determine the correct position of each element** in the sorted output array. Each element in the count array is updated by adding the value of the previous count array element.

5. Create an output array to store the sorted elements. The size of the output array is the same as the input array.

6. **Traverse the input array in reverse order**. For each element, find its corresponding position in the output array using the count array. Decrement the count array element by 1 to handle duplicate elements.

7. Place each element in the correct position in the output array based on the count array and decrement the count array element by 1.

8. The output array now contains the sorted elements.

### Example

Here's an example to illustrate the steps:

Given the input array: [4, 2, 2, 8, 3, 3, 1]

Find the minimum value: 1 and the maximum value: 8.

Create a count array: [0, 0, 0, 0, 0, 0, 0, 0, 0]

Traverse the input array and update the count array: [1, 2, 2, 2, 0, 0, 0, 1, 0]

Modify the count array to store the cumulative sum: [1, 3, 5, 7, 7, 7, 7, 8, 8]

Create an output array: [0, 0, 0, 0, 0, 0, 0, 0, 0]. The size is the same as the input array.

Traverse the input array in reverse order: [1, 3, 3, 8, 2, 2, 4]

Place 4 in the output array at index 7 (count[4] - 1) and decrement count[4].
Place 2 in the output array at index 2 (count[2] - 1) and decrement count[2].
Place 2 in the output array at index 1 (count[2] - 1) and decrement count[2].
Place 8 in the output array at index 7 (count[8] - 1) and decrement count[8].
Place 3 in the output array at index 4 (count[3] - 1) and decrement count[3].
Place 3 in the output array at index 3 (count[3] - 1) and decrement count[3].
Place 1 in the output array at index 0 (count[1] - 1) and decrement count[1].
The output array is now: [1, 2, 2, 3, 3, 4, 8]

The output array contains the sorted elements.
