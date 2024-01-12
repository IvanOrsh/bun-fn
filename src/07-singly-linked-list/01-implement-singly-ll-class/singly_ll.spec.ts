import { describe, it, expect } from "bun:test";

import { LinkedList } from "./singly-ll";

describe("Test LinkedList", () => {
  describe("get", () => {
    it("should return null when index is out of bounds", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.size).toBe(3);
      expect(list.get(4)).toBeNull();
    });

    it("should return the value at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
    });
  });

  describe("addAtHead", () => {
    it("should add the value at the head of the list", () => {
      const list = new LinkedList();
      list.addAtHead(1);
      list.addAtHead(2);
      list.addAtHead(3);
      expect(list.size).toBe(3);
      expect(list.get(0)).toBe(3);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(1);
    });
  });

  describe("addAtTail", () => {
    it("should add the value at the tail of the list", () => {
      const list = new LinkedList();
      list.addAtTail(1);
      list.addAtTail(2);
      list.addAtTail(3);
      expect(list.size).toBe(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
      expect(list.tail?.value).toBe(3);
    });
  });

  describe("addAtIndex", () => {
    it("should add the value at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      expect(list.size).toBe(4);

      list.addAtIndex(2, 5);

      expect(list.size).toBe(5);
      expect(list.get(2)).toBe(5);
    });

    it("should add the value at the head of the list", () => {
      const list = new LinkedList();
      list.addAtIndex(0, 1);
      list.addAtIndex(0, 2);
      list.addAtIndex(0, 3);
      expect(list.size).toBe(3);
      expect(list.get(0)).toBe(3);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(1);
    });

    it("should add the value at the tail of the list", () => {
      const list = new LinkedList();
      list.addAtIndex(0, 1);
      list.addAtIndex(1, 2);
      list.addAtIndex(2, 3);
      expect(list.size).toBe(3);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(2);
      expect(list.get(2)).toBe(3);
      expect(list.tail?.value).toBe(3);
    });
  });

  describe("deleteAtIndex", () => {
    it("should delete the value at the specified index", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.size).toBe(3);
      list.deleteAtIndex(1);
      expect(list.size).toBe(2);
      expect(list.get(0)).toBe(1);
      expect(list.get(1)).toBe(3);
    });

    it("should delete the only node in the linked list", () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.size).toBe(1);
      list.deleteAtIndex(0);

      expect(list.size).toBe(0);
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });

    it("should delete the last node of the linked list", () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.size).toBe(3);

      list.deleteAtIndex(2);

      expect(list.size).toBe(2);
      expect(list.tail?.value).toBe(2);
    });
  });
});
