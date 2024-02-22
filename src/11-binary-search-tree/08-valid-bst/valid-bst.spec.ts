import { describe, it, expect } from "bun:test";

import { isValidBST, BinaryTree } from "./valid-bst";

describe("Test isValidBST", () => {
  it("should return true for a valid BST", () => {
    const tree = new BinaryTree();
    tree.insert([10, 5, 15, 3, 7, null, 18]);

    expect(isValidBST(tree.root)).toBe(true);
  });

  it("should return true for a valid BST", () => {
    const tree = new BinaryTree();
    tree.insert([
      10,
      5,
      20,
      3,
      7,
      15,
      30,
      null,
      4,
      null,
      null,
      null,
      17,
      null,
      null,
      null,
      null,
      null,
      18,
    ]);

    expect(isValidBST(tree.root)).toBe(true);
  });
});
