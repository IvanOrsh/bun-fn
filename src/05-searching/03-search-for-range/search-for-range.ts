export function searchForRangeRec(arr: number[], target: number): number[] {
  /*
- we will use a slightly modified version of binary search 2 times:
  - to find left extreme
  - and to find right extreme

   0  1  2  3  4  5  6  7  8  9  10 11
  [0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 7, 8 ]

  -> val(mid) === target ?
  -> is mid === length - 1 ? -> found right extreme
  -> is mid === 0 ? -> found left extreme

  T = O(log n)
  S = O(log n) (call stack)
*/

  const range = [-1, -1];

  findLeftExtreme(arr, target, range, 0, arr.length - 1);
  findRightExtreme(arr, target, range, 0, arr.length - 1);

  // suppose to mutate range
  function findLeftExtreme(
    arr: number[],
    target: number,
    range: number[],
    left: number,
    right: number
  ) {
    if (left > right) return;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      if (mid === 0) {
        // we have found left extreme!
        range[0] = 0;
      } else if (arr[mid - 1] === target) {
        // continue calling function recursively
        findLeftExtreme(arr, target, range, left, mid - 1);
      } else {
        // we have found our left extreme!
        range[0] = mid;
      }
    } else {
      if (target > arr[mid]) {
        findLeftExtreme(arr, target, range, mid + 1, right);
      } else {
        findLeftExtreme(arr, target, range, left, mid - 1);
      }
    }
  }

  function findRightExtreme(
    arr: number[],
    target: number,
    range: number[],
    left: number,
    right: number
  ) {
    if (left > right) return;

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      if (mid === arr.length - 1) {
        // we have found right extreme!
        range[1] = arr.length - 1;
      } else if (arr[mid + 1] === target) {
        // continue calling function recursively
        findRightExtreme(arr, target, range, mid + 1, right);
      } else {
        // we have found our right extreme!
        range[1] = mid;
      }
    } else {
      if (target > arr[mid]) {
        findRightExtreme(arr, target, range, mid + 1, right);
      } else {
        findRightExtreme(arr, target, range, left, mid - 1);
      }
    }
  }

  return range;
}

export function searchForRangeIter(arr: number[], target: number): number[] {
  const leftExtreme = findLeftExtreme(arr, target);
  const rightExtreme = findRightExtreme(arr, target);

  function findLeftExtreme(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        if (mid === 0) {
          // we have found left extreme!
          return 0;
        } else if (arr[mid - 1] === target) {
          // continue calling function recursively
          right = mid - 1;
        } else {
          // we have found our left extreme!
          return mid;
        }
      } else {
        if (target > arr[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return -1;
  }

  function findRightExtreme(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        if (mid === arr.length - 1) {
          // we have found right extreme!
          return arr.length - 1;
        } else if (arr[mid + 1] === target) {
          // continue calling function recursively
          left = mid + 1;
        } else {
          // we have found our right extreme!
          return mid;
        }
      } else {
        if (target > arr[mid]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }

    return -1;
  }

  return [leftExtreme, rightExtreme];
}
