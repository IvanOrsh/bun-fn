export function selectSort(arr: number[]): void {
  /* 
     i
     0  1  2  3  4  5
    [4, 8, 2, 6, 1, 5]
        j = i + 1

    smallest = 0

    - in each pass we will identify the SMALLEST number and put it at index 0


    T = 1 + 2 + ... + n-1 = (n - 1) * n / 2 = (n^2 - n)/2  = O(n^2)
  */

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
    }

    if (i !== smallest) {
      swap(arr, i, smallest);
    }
  }
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
