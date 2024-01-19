import { describe, it, expect } from "bun:test";

import { QueueArr, Queue } from "./queue";

describe("Test QueueArr", () => {
  it("should enqueue, dequeue and peek", () => {
    const queue = new QueueArr();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.size()).toEqual(2);
  });
});

describe("Test Queue", () => {
  it("should enqueue, dequeue and peek", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.size).toEqual(3);

    expect(queue.dequeue()).toEqual(2);
  });

  it("should dequeue from the list with one element", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.size).toEqual(0);
  });
});
