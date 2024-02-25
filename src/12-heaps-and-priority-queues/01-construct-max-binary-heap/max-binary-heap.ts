/*

child nodes indices = 2*n + 1, 2*n + 2, where n = parent node's index

parent node index = Math.floor((child node index - 1) / 2)

========

indices of leaves = floor(N / 2) to N - 1
indices of internal nodes = 0 to floor(n / 2) - 1

BUILD

idx internal: from 0 to 3
idx leaves: 3 to 7

 0  1  2  3  4  5  6  7
[4, 7, 3, 0, 9, 3, 2, 6]
 ^        ^  ^        ^
  -------     --------
 internal      leaves

*/

export class MaxBinaryHeap {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  buildHeap(arr: number[]): MaxBinaryHeap {
    const copyArr = arr.slice();
    // internal nodes: 0 to floor(n / 2) - 1
    // in reverse: floor(n / 2) - 1 to 0

    // heapify each internal node one by one in reverse
    const length = copyArr.length;
    const lastParent = Math.floor(length / 2) - 1; // last parent = last internal node
    for (let i = lastParent; i >= 0; i--) {
      this.bubbleDown(copyArr, i);
    }

    this.heap = copyArr;
    return this;
  }

  private bubbleDown(arr: number[], parentIdx: number) {
    const length = arr.length;
    const current = arr[parentIdx];

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let largest = null;

      if (leftChildIdx < length) {
        leftChild = arr[leftChildIdx];

        if (leftChild > current) {
          largest = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = arr[rightChildIdx];

        if (
          (largest === null && rightChild > current) ||
          (largest !== null && rightChild > leftChild!)
        ) {
          largest = rightChildIdx;
        }
      }

      if (largest === null) break; // parent is largest

      // else swap
      arr[parentIdx] = arr[largest];
      arr[largest] = current;
      parentIdx = largest; // we're going down
    }
  }

  extractMax(): number {
    const maxValue = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last as number;
      this.bubbleDown(this.heap, 0);
    }

    return maxValue;
  }

  insert(value: number): MaxBinaryHeap {
    this.heap.push(value);
    this.bubbleUp();

    return this;
  }

  private bubbleUp() {
    let childIdx = this.heap.length - 1;
    let value = this.heap[childIdx];

    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (value <= parent) break;

      // else swap
      this.heap[parentIdx] = value;
      this.heap[childIdx] = parent;
      childIdx = parentIdx;
    }
  }
}
