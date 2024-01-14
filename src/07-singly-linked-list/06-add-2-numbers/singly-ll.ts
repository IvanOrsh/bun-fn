export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  size = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  static fromArray<T>(arr: T[]): LinkedList<T> {
    const list = new LinkedList<T>();
    for (let i = 0; i < arr.length; i++) {
      list.append(arr[i]);
    }
    return list;
  }

  append(value: T) {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail!.next = new ListNode(value);
      this.tail = this.tail!.next;
    }
    this.size++;
  }

  get(index: number): T | null {
    if (index < 0) return null;
    if (index === 0) return this.head?.value || null;
    if (index === this.size - 1) return this.tail?.value || null;
    if (index > this.size - 1) return null;

    let i = 0;
    let node = this.head;

    while (node) {
      if (i === index) {
        return node.value;
      }
      i++;
      node = node.next;
    }

    return null;
  }

  getNode(index: number): ListNode<T> | null {
    if (index < 0) return null;
    if (index === 0) return this.head || null;
    if (index === this.size - 1) return this.tail || null;
    if (index > this.size - 1) return null;

    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index) {
        return node;
      }
      i++;
      node = node.next;
    }
    return null;
  }

  addAtHead(value: T) {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.head = new ListNode(value, this.head);
    }
    this.size++;
  }

  addAtTail(value: T) {
    if (this.head === null) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail!.next = new ListNode(value);
      this.tail = this.tail!.next;
    }
    this.size++;
  }

  addAtIndex(index: number, value: T) {
    if (index < 0) return;
    if (index === 0) {
      this.addAtHead(value);
      return;
    }
    if (index === this.size) {
      this.addAtTail(value);
      return;
    }

    // invalid index
    if (index > this.size) {
      return;
    }

    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index - 1) {
        node.next = new ListNode(value, node.next);
        this.size++;
        return;
      }
      i++;
      node = node.next;
    }
  }

  deleteAtIndex(index: number): ListNode<T> | null {
    if (index < 0) return null;
    if (index === 0) {
      const oldHead = this.head;
      this.head = this.head?.next || null;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return oldHead;
    }

    if (index === this.size - 1) {
      const oldTail = this.tail;
      const newTail = this.getNode(index - 1)!;
      this.tail = newTail;
      newTail.next = null;
      this.size--;
      return oldTail;
    }

    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index - 1) {
        const oldNode = node.next;
        node.next = node.next?.next || null;
        this.size--;
        return oldNode;
      }
      i++;
      node = node.next;
    }

    return null;
  }
}
