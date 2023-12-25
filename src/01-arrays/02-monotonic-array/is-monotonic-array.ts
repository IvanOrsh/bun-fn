export function isMonotonicArray(arr: number[]): boolean {
  // non-increasing: 2 and 2, 7 and 1
  // array[i] >= array[i+1]

  // non-decreasing: 2 and 2, 10 and 12
  // array[i] <= array[i+1]

  // [3, _, _, _, 7] - can only be monotonic if it is monotone increasing -> check, if it's non-decreasing

  // [3, _, _, _, 3] - can only be monotonic if ALL THE ELEMENTS ARE EQUAL!

  // [3, _, _, _, -5] - can only be monotonic if it is monotone decreasing -> check, if it's non-increasing

  if (arr.length < 2) {
    return true;
  }

  // check if it's monotone increasing
  if (arr[0] < arr[arr.length - 1]) {
    // monotone increasing => check if it's non-decreasing
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
  } else if (arr[0] > arr[arr.length - 1]) {
    // monotone decreasing => check if its' non-increasing
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
  } else {
    // check for equality
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] !== arr[i + 1]) {
        return false;
      }
    }
  }

  return true;
}
