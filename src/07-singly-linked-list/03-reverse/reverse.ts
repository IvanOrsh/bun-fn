/*
 
   null   1 -> 2 -> 3 -> 4 -> null
    ^     ^    ^
   prev  curr  next, and then move the 3 (prev, curr, next) one step ahead
   
   what are we trying to achieve? null <- 1 <- 2 <- 3 <- 4 
                                    ^     ^    ^
                                  prev   curr next

  curr = head, prev = null

  next = curr.next
  curr.next = prev
  prev = curr
  curr = next
*/

export class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T, next: ListNode<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export function reverse<T>(head: ListNode<T>): ListNode<T> | null {
  // prev  current  next
  // shift the direction of the pointer
  // we have: current -> next
  // we want: prev -> current
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;

    // now shift
    prev = curr;
    curr = next!;
  }

  return prev;
}
