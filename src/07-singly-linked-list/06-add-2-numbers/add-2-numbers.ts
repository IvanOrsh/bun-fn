/*
    628
  +
    567
   1195

   8 + 7 = 15
   15 % 10 = 5 (to the next node)
   floor(15 / 10) = 1 -> carry forward

   2 + 6 + 1 = 9
   9 % 10 = 9 (to the next node)
   floor(9 / 10) = 0 -> carry forward (0)

   6 + 5 = 11
   11 % 10 = 1 (to the next node)
   floor(11 / 10) = 1 -> carry forward (1)
  */

import { LinkedList } from "./singly-ll";

export class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) {}
}

export function addTwoNumbers(
  l1: ListNode<number> | null,
  l2: ListNode<number> | null
): ListNode<number> | null {
  let headOne: ListNode<number> | null = l1;
  let headTwo: ListNode<number> | null = l2;
  const res: LinkedList<number> = new LinkedList();
  let carryForward = 0;

  while (headOne || headTwo || carryForward > 0) {
    if (!headOne) {
      headOne = new ListNode(0);
    }
    if (!headTwo) {
      headTwo = new ListNode(0);
    }

    const sum = headOne.value + headTwo.value + carryForward;
    const sumNodeValue = sum % 10;
    carryForward = Math.floor(sum / 10);
    res.addAtTail(sumNodeValue);

    headOne = headOne.next;
    headTwo = headTwo.next;
  }

  return res.head;
}
