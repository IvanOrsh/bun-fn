export function bubble(arr: number[]): void {
  // T = O(n^2), S = O(1)
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr.length - i - 1; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       const temp = arr[j];
  //       arr[j] = arr[j + 1];
  //       arr[j + 1] = temp;
  //     }
  //   }
  // }

  // alternatively
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1 - counter; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
        sorted = false;
      }
    }
    counter++;
  }
}

function swap(arr: number[], i: number): void {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
