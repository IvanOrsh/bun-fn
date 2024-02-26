/*

     Job B { priority: 1 } 
     /                   \
Job A { priority: 3 }     Job C { priority: 2 }

[B, A, C]

===
insert:
1. [B, A, C] <- push D (push to the array)
2. bubble up

===
remove:
1. remove from the beginning
2. pop the last element, and put it in the beginning
3. bubble down
*/

export class Node<T> {
  constructor(public priority: number, public value: T) {}
}

export class PriorityQueue<T> {
  heap: Node<T>[];

  constructor() {
    this.heap = [];
  }

  enqueue(value: T, priority: number): PriorityQueue<T> {
    const newNode = new Node(priority, value);
    this.heap.push(newNode);
    this.bubbleUp();

    return this;
  }

  private bubbleUp() {
    let idx = this.heap.length - 1;
    const el = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentEl = this.heap[parentIdx];

      // check PRIORITY
      if (el.priority >= parentEl.priority) break;

      // else swap
      this.heap[parentIdx] = el;
      this.heap[idx] = parentEl;
      idx = parentIdx;
    }
  }

  dequeue(): T | null {
    if (this.heap.length === 0) return null;

    const min = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end as Node<T>;
      this.bubbleDown();
    }

    return min.value;
  }

  private bubbleDown() {
    let idx = 0;
    let length = this.heap.length;
    const el = this.heap[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let smallest = null; // to indicate that the swap is required

      // valid index
      if (leftChildIdx < length) {
        leftChild = this.heap[leftChildIdx];
        // compare priority
        if (leftChild.priority < el.priority) {
          smallest = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.heap[rightChildIdx];

        if (
          (smallest === null && rightChild.priority < el.priority) ||
          (smallest !== null && rightChild.priority < leftChild!.priority)
        ) {
          smallest = rightChildIdx;
        }
      }

      // we know whether we need to swap
      if (smallest === null) break; // element is in the right position

      // else swap
      this.heap[idx] = this.heap[smallest];
      this.heap[smallest] = el;
      idx = smallest;
    }
  }
}
