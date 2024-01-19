export class QueueArr<T> {
  private elements: T[] = [];

  enqueue(element: T) {
    this.elements.push(element);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  peek(): T | undefined {
    return this.elements[0];
  }

  // Check if the queue is empty
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  size(): number {
    return this.elements.length;
  }

  clear() {
    this.elements = [];
  }
}

export class Node<T> {
  constructor(public value: T, public next?: Node<T>) {}
}

export class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  public size = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(element: T) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue(): T | undefined {
    if (this.head === null) {
      return undefined;
    }

    if (this.head === this.tail) {
      const res = this.head.value;
      this.size--;
      this.head = null;
      this.tail = null;
      return res;
    }

    const res = this.head.value;
    this.head = this.head.next!;
    this.size--;
    return res;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
