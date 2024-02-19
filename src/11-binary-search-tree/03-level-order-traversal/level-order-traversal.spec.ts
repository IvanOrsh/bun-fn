import { describe, it, expect } from "bun:test";

import { BinaryTree } from "./level-order-traversal";

describe("Test level order traversal", () => {
  it.each([
    {
      arr: [7, 11, 1, null, 7, 2, 8, null, null, null, 3, null, null, 5, null],
      result: [[7], [11, 2], [1, 8, 3], [7, 5]],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const tree = new BinaryTree();
    tree.insert(arr);
  });
});
