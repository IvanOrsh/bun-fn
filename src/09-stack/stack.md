## Stack

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It is an ordered collection of elements where the insertion and deletion of elements occur at one end, called the top of the stack.

### Implementation

In TypeScript, you can implement a stack using an array or a linked list. Here's an example implementation using an array:

```ts
class Stack<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  // Push an element onto the stack
  push(element: T) {
    this.elements.push(element);
  }

  // Pop the top element from the stack and return it
  pop(): T | undefined {
    return this.elements.pop();
  }

  // Get the top element of the stack without removing it
  peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Get the number of elements in the stack
  size(): number {
    return this.elements.length;
  }

  // Clear the stack
  clear() {
    this.elements = [];
  }
}
```

### Time and Space Complexity

The time complexity of stack operations implemented using an array is as follows:

Push: O(1) - inserting an element at the top of the stack is a constant time operation.

Pop: O(1) - removing the top element from the stack is a constant time operation.

Peek: O(1) - accessing the top element of the stack without removing it is a constant time operation.

isEmpty: O(1) - checking if the stack is empty is a constant time operation.

Size: O(1) - getting the number of elements in the stack is a constant time operation.

Please note that if you implement a stack using a linked list, the time complexity of push, pop, and peek operations remains O(1), but the space complexity may be higher due to the additional memory used for maintaining the links between nodes.

### List of Problems

1. [Design a Stack](01-implement-stack/question.md), [Solution](01-implement-stack/stack.ts)
2. [Reverse Polish Notation](02-reverse-polish-notation/question.md), [Solution](02-reverse-polish-notation/rpn.ts)
