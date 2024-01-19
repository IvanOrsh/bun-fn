import { describe, it, expect } from "bun:test";

import { QueueWithStacks } from "./queue-with-stack";

describe("Test QueueWithStacks", () => {
  it("should enqueue, dequeue and peek", () => {
    const queue = new QueueWithStacks();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.peek()).toEqual(2);
    expect(queue.size).toEqual(2);
  });
});
