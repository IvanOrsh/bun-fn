export function searchInMatrix(matrix: number[][], target: number): boolean {
  /*
     columns = 4 = matrix[0].length
     rows = 3 = matrix.length

      1 | 2  | 3  | 4   - top
      5 | 6  | 7  | 8
      9 | 10 | 11 | 12  - bottom

      target = 5

      brute force - just go through all elements - not efficient, T = O(m * n)

      ----

      Approach:

      1. Use binary search to find relevant ROW. 
      2. Use binary search to check if target value is in relevant ROW.

  */

  const columns = matrix[0].length;
  const rows = matrix.length;

  // binary search to identify the row
  let top = 0;
  let bottom = rows - 1;
  let mid: number;

  while (top <= bottom) {
    mid = Math.floor((top + bottom) / 2);

    if (target < matrix[mid][0]) {
      bottom = mid - 1;
    } else if (target > matrix[mid][columns - 1]) {
      top = mid + 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return false;
  }

  // binary search to check if target value is in relevant ROW
  let left = 0;
  let right = columns - 1;
  let midValue: number;
  while (left <= right) {
    midValue = Math.floor((left + right) / 2);

    if (target === matrix[mid!][midValue]) {
      return true;
    }

    if (target < matrix[mid!][midValue]) {
      right = midValue - 1;
    } else {
      left = midValue + 1;
    }
  }

  return false;
}
