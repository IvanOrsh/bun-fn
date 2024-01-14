import { describe, it, expect } from "bun:test";

import { LinkedList } from "./singly-ll";
import { detectCycleBrute, detectCycle } from "./detect-cycle";

describe("detectCycleBrute", () => {
  it("should return the node where cycle is detected", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.head!.next!.next!.next!.next = list.head;

    expect(detectCycleBrute(list.head!)).toEqual(list.head!);
  });

  it("should return the node where cycle is detected", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.head!.next!.next = list.head!.next;

    expect(detectCycleBrute(list.head!)).toEqual(list.head!.next);
  });
});

describe("detectCycle", () => {
  it("should return the node where cycle is detected", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.head!.next!.next!.next!.next = list.head;

    expect(detectCycle(list.head!)).toEqual(list.head!);
  });

  it("should return the node where cycle is detected", () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.head!.next!.next = list.head!.next;

    expect(detectCycle(list.head!)).toEqual(list.head!.next);
  });
});
