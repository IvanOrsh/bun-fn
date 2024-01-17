export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: T) {
    const newNode = new ListNode<T>(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  remove(node: ListNode<T>) {
    // null - 1 - 2 - 3 - null

    // 1. head
    // 2. tail
    // 3. somewhere between head and tail
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;

    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;

    node.next = null;
    node.prev = null;
  }

  insertBefore(nodePosition: ListNode<T>, nodeToInsert: ListNode<T>) {
    // null - 1 - 2 - 3 - 4  - null,  7
    //            ^                   ^
    //        nodePosition         nodeToInsert
    // null - 1 - 2 - 7 - 3 - 4 - null
    //

    // 1. given node is the part of linked list
    // 2. given node is not the part of linked list

    // just one node in the list
    if (this.head === nodeToInsert && this.tail === nodeToInsert) {
      return;
    }

    this.remove(nodeToInsert);
    nodeToInsert.prev = nodePosition.prev;
    nodeToInsert.next = nodePosition;

    if (nodePosition === this.head) {
      this.head = nodeToInsert;
    } else {
      nodePosition.prev!.next = nodeToInsert;
    }

    nodePosition.prev = nodeToInsert;
  }

  removeAllNodesWithValue(value: T) {
    let currentNode = this.head;
    while (currentNode) {
      // we don't want to lose the next value
      const nextNode = currentNode.next;

      if (currentNode.value === value) {
        this.remove(currentNode);
      }

      currentNode = nextNode;
    }
  }

  insertAt(position: number, node: ListNode<T>) {
    // the given node can be:
    // - part of the linked list: shift position of existing node
    // - not part of the linked list: insert new node

    if (position === 0) {
      this.insertBefore(this.head!, node);
      return;
    }

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }

    let currentNode: ListNode<T> | null = this.head;
    let i = 0;
    while (i < position && currentNode) {
      currentNode = currentNode.next;
      i++;
    }

    if (currentNode) {
      this.insertBefore(currentNode, node);
    } else {
      this.remove(node);
      node.next = null;
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
    }
  }
}
