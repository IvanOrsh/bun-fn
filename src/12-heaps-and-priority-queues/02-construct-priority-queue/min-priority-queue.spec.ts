import { describe, expect, it } from "bun:test";

import { PriorityQueue } from "./min-priority-queue";

describe("Test PriorityQueue", () => {
  describe("Test Enqueue", () => {
    it("should enqueue single element to a queue", () => {
      const pq = new PriorityQueue();
      pq.enqueue(1, 1);
      expect(pq.heap[0]).toEqual({ priority: 1, value: 1 });
    });

    it("should enqueue multiple elements to a queue", () => {
      const pq = new PriorityQueue();
      pq.enqueue(4, 4)
        .enqueue(3, 3)
        .enqueue(1, 1)
        .enqueue(2, 2)
        .enqueue(0, 0)
        .enqueue(6, 6);

      expect(pq.heap[0]).toEqual({ priority: 0, value: 0 });
    });
  });

  describe("Test Dequeue", () => {
    it("should dequeue single element from a queue", () => {
      const pq = new PriorityQueue();
      pq.enqueue(4, 4)
        .enqueue(3, 3)
        .enqueue(1, 1)
        .enqueue(2, 2)
        .enqueue(0, 0)
        .enqueue(6, 6);

      expect(pq.dequeue()).toEqual(0);
    });

    it("should dequeue multiple elements from a queue", () => {
      const pq = new PriorityQueue();
      pq.enqueue(4, 4)
        .enqueue(3, 3)
        .enqueue(1, 1)
        .enqueue(2, 2)
        .enqueue(0, 0)
        .enqueue(6, 6);

      expect(pq.dequeue()).toEqual(0);
      expect(pq.dequeue()).toEqual(1);
      expect(pq.dequeue()).toEqual(2);
      expect(pq.dequeue()).toEqual(3);
      expect(pq.dequeue()).toEqual(4);
      expect(pq.dequeue()).toEqual(6);

      expect(pq.dequeue()).toEqual(null);
    });
  });
});
