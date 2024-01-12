import { describe, it, expect } from "bun:test";

import { LinkedList } from "./singly-ll";
import { removeDuplicates } from "./remove-duplicates";

describe("removeDuplicates", () => {
  it("should remove duplicate values from a linked list", () => {
    const list = new LinkedList<number>();
    list.append(1);
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(3);
    list.append(3);
    list.append(3);
    list.append(4);
    list.append(4);
    list.append(5);
    const expectedValues = [1, 2, 3, 4, 5];

    const head = removeDuplicates(list.head!);

    let curr = head;
    let i = 0;
    while (curr) {
      expect(curr.value).toBe(expectedValues[i]);
      curr = curr.next!;
      i++;
    }
  });
});
