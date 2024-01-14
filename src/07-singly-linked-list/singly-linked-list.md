## Singly Linked List

A singly linked list is a data structure that consists of a sequence of nodes, where each node contains a value and a reference (or link) to the next node in the sequence. The last node in the list has a reference to null, indicating the end of the list.

### Implementation

In TypeScript, you can define a singly linked list using classes. Here's an example implementation:

```ts
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a new node at the end of the list
  append(value: T) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove the first occurrence of a node with the given value
  remove(value: T) {
    if (!this.head) {
      return;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
        if (!currentNode.next) {
          this.tail = currentNode;
        }
        return;
      }
      currentNode = currentNode.next;
    }
  }

  // Print the values of all nodes in the list
  print() {
    let currentNode = this.head;
    const values: T[] = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values);
  }
}
```

### Operations

Insert:

- at the beginning: S, T = O(1)
- at the end: S, T = O(1) (if tail stored, else T = O(n))
- in between: T = O(x), S = (1)

Remove:

- at the beginning: S, T = O(1)
- at the end: S, T = O(1) (if tail stored, else T = O(n))
- in between: T = O(x), S = O(1)

Access xth node: T = O(x), S = O(1)

Set value of xth node: T = O(x), S = O(1)

Copy: T,S = O(n)

Traverse / Search: T = O(n), S = O(1)

### List of problems

1. [Design Singly Linked List](01-implement-singly-ll-class/question.md), [Solution](01-implement-singly-ll-class/singly-ll.ts)
2. [Remove Duplicates](02-remove-duplicates/question.md), [Solution](02-remove-duplicates/remove-duplicates.ts)
3. [Reverse](03-reverse/question.md), [Solution](03-reverse/reverse.ts)
4. [Detect Cycle](04-cycle-detection/question.md), [Solution](04-cycle-detection/detect-cycle.ts)
