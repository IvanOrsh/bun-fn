// using array
export class StackArr<T> {
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

// using linked list
class Node<T> {
  constructor(public value: T, public next: Node<T> | null) {}
}

export class StackLL<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  public size = 0;

  constructor() {
    this.first = null;
    this.last = null;
  }

  // add at the beginning
  push(element: T) {
    const node = new Node(element, null);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    this.size++;
  }

  // remove from the beginning
  pop(): T {
    if (!this.first) {
      throw new Error("Stack is empty");
    }

    const node = this.first;
    this.first = node.next;
    node.next = null;

    this.size--;

    if (this.size === 0) {
      this.last = null;
    }

    return node.value;
  }
}
