## Queue

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. It is an ordered collection of elements where the insertion of new elements is done at one end, called the rear or back of the queue, and the removal of elements is done at the other end, called the front or head of the queue.

### Implementation

```ts
class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  // Add an element to the back of the queue
  enqueue(element: T) {
    this.elements.push(element);
  }

  // Remove and return the element at the front of the queue
  dequeue(): T | undefined {
    return this.elements.shift();
  }

  // Get the element at the front of the queue without removing it
  peek(): T | undefined {
    return this.elements[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Get the number of elements in the queue
  size(): number {
    return this.elements.length;
  }

  // Clear the queue
  clear() {
    this.elements = [];
  }
}
```

### Time Complexity

The time complexity of queue operations implemented using an array is as follows:

Enqueue: O(1) - adding an element to the back of the queue is a constant time operation.

Dequeue: O(n) - removing an element from the front of the queue using an array requires shifting all the remaining elements, resulting in a linear time operation. However, if you implement the queue using a linked list, the dequeue operation can be done in constant time, O(1).

Peek: O(1) - accessing the element at the front of the queue without removing it is a constant time operation.

isEmpty: O(1) - checking if the queue is empty is a constant time operation.

Size: O(1) - getting the number of elements in the queue is a constant time operation.

### List of Problems

1. [Design a Queue](01-implement-queue/question.md), [Solution](01-implement-queue/queue.ts)
