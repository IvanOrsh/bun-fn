import { describe, it, expect } from "bun:test";

import { buildBSTFromSortedArray, Node } from "./sorted-array-to-bst";

describe("Test buildBSTFromSortedArray", () => {
  it("should return correct BST", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const root = buildBSTFromSortedArray(arr);
    expect(root?.value).toBe(5);
    expect(root?.left?.value).toBe(2);
    expect(root?.right?.value).toBe(7);
    expect(root?.left?.left?.value).toBe(1);
    expect(root?.left?.right?.value).toBe(3);
    expect(root?.right?.left?.value).toBe(6);
    expect(root?.right?.right?.value).toBe(8);
    expect(root?.right?.right?.right?.value).toBe(9);
  });
});
