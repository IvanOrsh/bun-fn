## Design Singly Linked List

Design a Singly linked list class that has:

- a head
- and tail.
  Every node is to have 2 attributes:
- value
- next.
  The linked list is to be 0-indexed.

The class should support:

- initialize the SinglyLinkedList
- `get(index)` - get the value of the index-th node. If index is invalid, return -1.
- `addAtHead(value)`
- `addAtTail(value)`
- `addAtIndex(index, value)`:
  - add a node of given value **before** the index-th node in the linked list.
  - if index equals the length of the linked list, the node will be appended to the end of the linked list.
  - if index is greater than the length, the node will not be inserted.
- `deleteAtIndex(index)`
