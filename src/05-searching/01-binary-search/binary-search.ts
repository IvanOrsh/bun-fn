export function binarySearchIter(arr: number[], target: number): number {
  // T = O(log n), S = O(1)
  //==================================
  // 0 1 2 3 4 5 6 7 8, target = 2
  //         ^
  // mid = floor[  (left + right) / ] = (0 + 8) / 2 = 4

  // 0 1 2 3 4
  //     ^
  //

  // algo: arr[mid] < target -> left = mid + 1
  // algo: arr[mid] > target -> right = mid - 1

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

export function binarySearchRec(arr: number[], target: number): number {
  // T = O(log n), S = O(log n)
  const helper = (
    arr: number[],
    target: number,
    left: number,
    right: number
  ): number => {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    if (target > arr[mid]) {
      return helper(arr, target, mid + 1, right);
    } else {
      return helper(arr, target, left, mid - 1);
    }
  };

  return helper(arr, target, 0, arr.length - 1);
}
