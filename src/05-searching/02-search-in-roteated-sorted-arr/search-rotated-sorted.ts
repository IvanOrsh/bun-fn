export function searchRotatedSorted(arr: number[], target: number): number {
  /*

  1 2 3 4 5 6

  possible rotations:

            mid
  idx: 0 1 | 2 | 3 4 5
  --------------------
  +    1 2 | 3 | 4 5 6
       6 1 | 2 | 3 4 5 +
       5 6 | 1 | 2 3 4 +
  +    4 5 | 6 | 1 2 3
  +    3 4 | 5 | 6 1 2
  +    2 3 | 4 | 5 6 1

  observations:
  if val(left) < val(mid) => left part is always sorted
  else  => the right part is always sorted

  ========================================
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    which part is sorted?
    1. should i explore left part?
    2. or right part?
  }
  */

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    // if arr[left] < arr[mid] => left part is sorted
    if (arr[left] <= arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) {
        // left---- target ---- mid
        right = mid - 1;
      } else {
        left = mid + 1; //
      }
    } else {
      // else => right part is sorted
      if (target <= arr[right] && target > arr[mid]) {
        // mid ---- target ---- right
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
