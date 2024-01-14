export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export function detectCycleBrute<T>(head: ListNode<T>): ListNode<T> | null {
  // T = O(n) | S = O(n)

  if (!head || !head.next) {
    return null;
  }

  const visited = new Set<ListNode<T>>();

  while (head) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next!;
  }

  return null;
}

export function detectCycle<T>(head: ListNode<T>): ListNode<T> | null {
  // T = O(n) | S = O(1)
  if (!head || !head.next) {
    return null;
  }

  let slow: ListNode<T> | null = head; // tortoise
  let fast: ListNode<T> | null = head; // hare

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return null;
  }

  let pointer = head;
  while (pointer !== slow) {
    pointer = pointer.next!;
    slow = slow.next!;
  }

  return slow;
}
