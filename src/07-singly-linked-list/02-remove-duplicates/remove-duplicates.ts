/*

  1 -> 2 -> 2 -> 3 -> 4 -> 4 -> 4 -> null
  ^    ^
curr  nextDist

- find next distinct node

*/

import { ListNode } from "./singly-ll";

export function removeDuplicates(head: ListNode<number>): ListNode<number> {
  let curr = head;

  while (curr) {
    let nextDist = curr.next;

    while (curr.value === nextDist?.value && nextDist) {
      nextDist = nextDist.next;
    }
    curr.next = nextDist;
    curr = nextDist!;
  }
  return curr;
}
