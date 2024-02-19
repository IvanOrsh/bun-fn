import { describe, it, expect } from "bun:test";

import { BinaryTree } from "./level-order-traversal";

describe("Test level order traversal", () => {
  describe("insert", () => {
    it("should insert nodes", () => {
      const tree = new BinaryTree();
      tree.insert([1, 2, 3, 4, 5]);

      expect(tree.root?.value).toBe(1);
      expect(tree.root?.left?.value).toBe(2);
      expect(tree.root?.right?.value).toBe(3);
      expect(tree.root?.left?.left?.value).toBe(4);
      expect(tree.root?.left?.right?.value).toBe(5);
    });

    it("should insert empty array", () => {
      const tree = new BinaryTree();
      tree.insert([]);

      expect(tree.root?.value).toBeUndefined();
    });

    it("should insert array that has some nulls", () => {
      const tree = new BinaryTree();
      tree.insert([1, 2, 3, null, 4]);

      expect(tree.root?.value).toBe(1);
      expect(tree.root?.left?.value).toBe(2);
      expect(tree.root?.right?.value).toBe(3);
      expect(tree.root?.left?.right?.value).toBe(4);
    });
  });

  describe("test level order traversal", () => {
    it.each([
      {
        arr: [
          7,
          11,
          1,
          null,
          7,
          2,
          8,
          null,
          null,
          null,
          3,
          null,
          null,
          5,
          null,
        ],
        result: [[7], [11, 2], [1, 8, 3], [7, 5]],
      },
    ])("$arr should return $result", ({ arr, result }) => {
      const tree = new BinaryTree();
      tree.insert(arr);
    });
  });
});
