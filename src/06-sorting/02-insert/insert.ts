export function insertSort(arr: number[]): void {
  /*
  T = O(n^2), S = O(1)

  divide array into 2 parts:
  - sorted
  - unsorted

  take elements one by one & insert them in the right place in the sorted part

  [7, 3, 8, 5, 1]

  i = 1 for unsorted part
  j = i - 1 for sorted part  

  1. i = 1, j = 0
  sorted: [7]
  unsorted: [3, 8, 5, 1]
             ^

  2. i = 2, j = 1
  sorted: [3, 7]
  unsorted: [8, 5, 1]
             ^

  and so on...

  */

  if (arr.length < 2) return;

  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
