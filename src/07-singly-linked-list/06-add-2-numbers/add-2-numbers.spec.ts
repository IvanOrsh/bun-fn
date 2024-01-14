import { describe, it, expect } from "bun:test";

import { LinkedList } from "./singly-ll";

import { addTwoNumbers } from "./add-2-numbers";

describe("Test addTwoNumbers", () => {
  it.each([
    {
      l1: LinkedList.fromArray([2, 4, 3]).head,
      l2: LinkedList.fromArray([]).head,
      result: LinkedList.fromArray([2, 4, 3]).head,
    },
    {
      l1: LinkedList.fromArray([]).head,
      l2: LinkedList.fromArray([5, 6, 4]).head,
      result: LinkedList.fromArray([5, 6, 4]).head,
    },
    {
      // 342 + 465 = 807
      l1: LinkedList.fromArray([2, 4, 3]).head,
      l2: LinkedList.fromArray([5, 6, 4]).head,
      result: LinkedList.fromArray([7, 0, 8]).head,
    },
    {
      l1: LinkedList.fromArray([8, 2, 6]).head,
      l2: LinkedList.fromArray([7, 6, 5]).head,
      result: LinkedList.fromArray([5, 9, 1, 1]).head,
    },
  ])("$l1 + $l2 should return $result", ({ l1, l2, result }) => {
    const res = addTwoNumbers(l1, l2);
    console.dir(res);
    expect(res).toEqual(result);
  });
});
