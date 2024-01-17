import { describe, it, expect } from "bun:test";

import { ListNode, DoublyLinkedList } from "./doubly-linked-list";

describe("Test DoublyLinkedList", () => {
  describe("Test append", () => {
    it("should append value", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.head!.value).toEqual(1);
      expect(list.tail!.value).toEqual(3);
    });
  });

  describe("Test remove", () => {
    it("should remove head", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(list.head!);
      expect(list.head!.value).toEqual(2);
      expect(list.tail!.value).toEqual(3);
    });

    it("should remove tail", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(list.tail!);
      expect(list.head!.value).toEqual(1);
      expect(list.tail!.value).toEqual(2);
    });

    it("should remove middle", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(list.head!.next!);
      expect(list.head!.value).toEqual(1);
      expect(list.tail!.value).toEqual(3);
    });
  });

  describe("Test insertBefore", () => {
    it("should do nothing when inserting to a linked list with only one node", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.insertBefore(list.head!, new ListNode(1));
      expect(list.head!.value).toEqual(1);
      expect(list.tail!.value).toEqual(1);
    });

    it("should insertBefore", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertBefore(list.head!, new ListNode(0));
      expect(list.head!.value).toEqual(0);
      expect(list.tail!.value).toEqual(3);
    });
  });

  describe("Test removeAllNodesWithValue", () => {
    it("should remove value", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(2);
      list.append(3);
      list.append(2);
      list.append(2);

      list.removeAllNodesWithValue(2);

      expect(list.head!.value).toEqual(1);
      expect(list.tail!.value).toEqual(3);
    });
  });

  describe("Test insertAt", () => {
    it("should insertAt", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.insertAt(0, new ListNode(0));
      expect(list.head!.value).toEqual(0);
      expect(list.tail!.value).toEqual(3);
    });

    it("should insertAt", () => {
      const list = new DoublyLinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.insertAt(2, new ListNode(7));

      expect(list.head!.next!.next!.value).toEqual(7);
    });

    it("should perform insertAt method for an empty linked list", () => {
      const list = new DoublyLinkedList();

      list.insertAt(3, new ListNode(1));

      expect(list.head?.value).toEqual(1);
      expect(list.tail?.value).toEqual(1);
    });

    it("should insetAt tail if position is greater than length of linked list", () => {
      const list = new DoublyLinkedList();
      list.append(0);
      list.append(1);

      list.insertAt(12, new ListNode(2));

      expect(list.tail?.value).toEqual(2);
    });
  });
});
