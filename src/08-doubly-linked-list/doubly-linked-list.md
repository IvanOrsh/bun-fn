## Doubly Linked List

A doubly linked list is a data structure that consists of a sequence of nodes, where each node contains a value and two references (or links): one to the previous node and one to the next node in the sequence. This allows for traversal in both directions.

### Implementation

```ts
class ListNode<T> {
  value: T;
  prev: ListNode<T> | null;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
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
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove the first occurrence of a node with the given value
  remove(value: T) {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.prev) {
          currentNode.prev.next = currentNode.next;
        } else {
          this.head = currentNode.next;
        }

        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        } else {
          this.tail = currentNode.prev;
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

const list = new DoublyLinkedList<number>();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print(); // Output: [10, 20, 30, 40]

list.remove(20);
list.print(); // Output: [10, 30, 40]
```

### Time and Space Complexity

- **Append**: Adding a new node at the end of the list takes constant time, O(1), as it involves updating the next and prev references of the tail node.

- **Remove**: Removing a node with a given value requires traversing the list to find the node, which takes O(n) time in the worst case, where n is the number of nodes in the list. Once the node is found, removing it involves updating the next and prev references of the adjacent nodes, which takes constant time, O(1).

- **Search**: Searching for a node with a given value requires traversing the list, which takes O(n) time in the worst case, where n is the number of nodes in the list.

- **Insert**: Inserting a new node at a specific position in the list requires traversing the list to find the insertion point, which takes O(n) time in the worst case. Once the insertion point is found, inserting the

### List of problems:

1. [Design a Doubly Linked List](01-implement-doubly-ll/question.md), [Solution](01-implement-doubly-ll/doubly-linked-list.ts)
