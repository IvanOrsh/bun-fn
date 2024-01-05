/*
  - stable sort algorithm

  Divide and conquer algorithm:

  1. array of size 1 is always sorted
  2. merge sorted arrays

  [5], [4] -> [4, 5]

  =====================
  1. merge 2 sorted arrays
  =====================

  - both ascending / descending
  [2, 5, 7], [1, 4, 6]
   ^          ^
  [1]

  [2, 5, 7], [1, 4, 6]
   ^             ^
  [1, 2]

  [2, 5, 7], [1, 4, 6]
      ^          ^
  [1, 2, 4]

  [2, 5, 7], [1, 4, 6]
      ^             ^
  [1, 2, 4, 5]

  [2, 5, 7], [1, 4, 6]
         ^          ^
  and so on...

  T = O(n + m) 
  S = O(n + M)

  =====================
  2. merge sort
  =====================

   0  1  2  3  4  5  6
  [7, 3, 8, 5, 1, 9, 5]

  - break into 2 halves

  left               right
  [7, 3, 8, 5]       [1, 9, 5]
  [7, 3]  [8,  5]    [1,  9]  [5]
  [7] [3] [8] [5]    [1] [9]  [5]

  now use merge 2 sorted arrays to merge them back to 1

  [3, 7] [5, 8]      [1,  9]  [5]
  [3, 5, 7, 8]       [1, 5, 9]
       [1, 3, 5, 5, 7, 8, 9]

-------------------------------------------

           n                    (n/2) ^ 0 = 1
  n/2             n/2           (n/2) ^ 1 = n/2^1
  n/4 n/4       n/4 n/4         (n/2) ^ 2 = n/2^2
  1 ...                         (n/2) ^ x = n/2^x, x = # levels

  n/2^x = 1 => n = 2^x => x = log2(n)

  n elements are merged

  in each level visit n elments

  T = O(n * # levels) = O(n * log(n))
  S = O(log(n) + n) = O(n)
  */

export function mergeSort(arr: number[]): number[] {
  // base
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftSide = mergeSort(arr.slice(0, mid));
  const rightSide = mergeSort(arr.slice(mid, arr.length));

  return mergeSortedArrays(leftSide, rightSide);
}

export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    // so it's a stable sort
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    mergedArr.push(...arr1.slice(i));
  }

  if (j < arr2.length) {
    mergedArr.push(...arr2.slice(j));
  }

  return mergedArr;
}
