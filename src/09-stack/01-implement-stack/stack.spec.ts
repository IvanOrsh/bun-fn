import { describe, it, expect } from "bun:test";

import { StackArr, StackLL } from "./stack";

describe("Test StackArr", () => {
  it("should be able to push and pop elements", () => {
    const stack = new StackArr();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });
});

describe("Test StackLL", () => {
  it("should be able to push and pop elements", () => {
    const stack = new StackLL();
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);

    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(1);

    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);

    expect(() => stack.pop()).toThrow();
  });
});
