import { describe, it, expect } from "bun:test";

import { LinkedList } from "./singly-ll";
import { reverse, ListNode } from "./reverse";

describe("reverse", () => {
  it("should return null if list is empty", () => {
    const list = new LinkedList<number>();
    const head = reverse(list.head!);
    expect(head).toBeNull();
  });

  it("should return the same list if list has only one node", () => {
    const list = new LinkedList<number>();
    list.append(1);
    const head = reverse(list.head!);
    expect(head).toBe(list.head!);
  });

  it("should reverse a linked list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(2);
    list.append(3);

    const expectedValues = [3, 2, 1];

    const head = reverse(list.head!);

    let curr = head;
    let i = 0;
    while (curr) {
      expect(curr.value).toBe(expectedValues[i]);
      curr = curr.next!;
      i++;
    }
  });
});
