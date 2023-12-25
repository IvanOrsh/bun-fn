export function rotateArrayBruteForce(arr: number[], k: number) {
  // [1, 2, 3, 4, 5]:
  // k=0: [1, 2, 3, 4, 5]
  // k=1: [5, 1, 2, 3, 4], k=6: [5, 1, 2, 3, 4],
  // k=2: [4, 5, 1, 2, 3], k=7: [4, 5, 1, 2, 3],
  // k=3: [3, 4, 5, 1, 2], k=8: [3, 4, 5, 1, 2]
  // k=4: [2, 3, 4, 5, 1], k=9: [2, 3, 4, 5, 1],
  // k=5: [1, 2, 3, 4, 5], k=10: [1, 2, 3, 4, 5]

  // Brute force: [1, 2, 3, 4, 5], k=2
  // 1. take k elements from the end and store them in a temp array: [4, 5]
  // 2. shift the rest of the elements in the array to the right: [1, 2, 1, 2, 3]
  // 3. replace the first (k) 2 elements with the temp array: [4, 5, 1, 2, 3]

  // slicing: T = O(K)
  // shifting: T = O(N-K)
  // replacing: T = O(K)
  // k < N - k => T = O(N-K) => O(N)
  // S = O(K)
  if (arr.length === 0) return;
  if (k === 0) return;
  if (k === arr.length) return;

  if (k > arr.length) {
    k = k % arr.length;
  }

  // Brute force:
  const temp = arr.slice(arr.length - k);

  // shift to the right
  for (let i = arr.length - 1 - k; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
}

const reverse = (arr: number[], start: number, end: number) => {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

export function rotateArray(arr: number[], k: number) {
  // [1, 2, 3, 4, 5, 6], k=2, [5, 6, 1, 2, 3, 4]
  // after reversing: [6, 5, 4, 3, 2, 1]:
  // first part : [6, 5], which is reversed [5, 6]
  // second part: [4, 3, 2, 1], which is reversed [1, 2, 3, 4]
  if (arr.length === 0) return;
  if (k === 0) return;
  if (k === arr.length) return;

  if (k > arr.length) {
    k = k % arr.length;
  }

  reverse(arr, 0, arr.length - 1);

  // reverse the first k elements [6, 5, 4, 3, 2, 1] -> [5, 6, 4, 3, 2, 1]
  reverse(arr, 0, k - 1);

  // reverse the rest
  reverse(arr, k, arr.length - 1);
}
