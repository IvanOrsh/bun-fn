export function getSquaredSorted(arr: number[]): number[] {
  // brute force:
  //  T = O(n log n), S = O(n)
  // return arr.map((x) => x ** 2).sort((a, b) => a - b);

  // better - now we will use the fact that the array is sorted
  // -3, 1, 2, 7
  //  |        |
  // one among these 2 -> pick the largest, adjust pointer accordingly
  // then, fill the LAST position of the result array with the largest

  // T = O(n), S = O(n)

  const res: number[] = new Array(arr.length).fill(0);
  let left = 0;
  let right = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const leftSquared = arr[left] ** 2;
    const rightSquared = arr[right] ** 2;

    if (leftSquared > rightSquared) {
      res[i] = leftSquared;
      left++;
    } else {
      res[i] = rightSquared;
      right--;
    }
  }

  return res;
}
