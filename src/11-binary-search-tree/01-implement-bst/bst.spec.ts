import { describe, it, expect } from "bun:test";

import { BinarySearchTree, TreeNode } from "./bst";

describe("Test BinarySearchTree", () => {
  describe("test insert", () => {
    it("should insert to empty tree should set root", () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      expect(tree.root?.value).toBe(10);
    });

    it("should insert to a non-empty tree", () => {
      const tree = new BinarySearchTree();
      tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

      /*
          10
          / \
         6  15
        / \  /
       3  8 20

       */

      expect(tree.root?.value).toBe(10);
      expect(tree.root?.left?.value).toBe(6);
      expect(tree.root?.right?.value).toBe(15);
      expect(tree.root?.left?.left?.value).toBe(3);
      expect(tree.root?.left?.right?.value).toBe(8);
      expect(tree.root?.right?.right?.value).toBe(20);
    });

    it("should insert to a non-empty tree", () => {
      const tree = new BinarySearchTree();
      tree
        .insert(20)
        .insert(6)
        .insert(35)
        .insert(3)
        .insert(8)
        .insert(27)
        .insert(55)
        .insert(1)
        .insert(3)
        .insert(25)
        .insert(29)
        .insert(60);

      /*
              20
              / \
          left  right
            6       35
           / \     / \
          3   8   27  55
         /\       /\    \ 
        1  3     25 29   60

       */

      expect(tree.root?.value).toBe(20);
      expect(tree.root?.left?.value).toBe(6);
      expect(tree.root?.right?.value).toBe(35);
      expect(tree.root?.left?.left?.value).toBe(3);
      expect(tree.root?.left?.right?.value).toBe(8);
      expect(tree.root?.right?.right?.value).toBe(55);
      expect(tree.root?.left?.left?.left?.value).toBe(1);
    });
  });

  describe("test find", () => {
    it("should find an existing value", () => {
      const tree = new BinarySearchTree();
      tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

      expect(tree.find(10)).toBe(tree.root);
      expect(tree.find(20)).toBe(tree.root!.right!.right);
    });
  });

  describe("test remove", () => {
    it("should remove value of the root node", () => {
      const tree = new BinarySearchTree();
      tree
        .insert(20)
        .insert(6)
        .insert(35)
        .insert(3)
        .insert(8)
        .insert(27)
        .insert(55)
        .insert(1)
        .insert(3)
        .insert(25)
        .insert(29)
        .insert(60);

      tree.remove(20);

      expect(tree.find(20)).toBe(null);
      expect(tree.root?.value).toBe(25);
    });

    it("should remove value of a leaf", () => {
      const tree = new BinarySearchTree();
      tree
        .insert(20)
        .insert(6)
        .insert(35)
        .insert(3)
        .insert(8)
        .insert(27)
        .insert(55)
        .insert(1)
        .insert(3)
        .insert(25)
        .insert(29)
        .insert(60);

      tree.remove(60);
      tree.remove(29);

      expect(tree.find(60)).toBe(null);
      expect(tree.find(29)).toBe(null);
    });

    it("should remove value of a node with only one child", () => {
      const tree = new BinarySearchTree();
      tree
        .insert(20)
        .insert(6)
        .insert(35)
        .insert(3)
        .insert(8)
        .insert(27)
        .insert(55)
        .insert(1)
        .insert(3)
        .insert(25)
        .insert(29)
        .insert(60);

      tree.remove(55);

      expect(tree.find(55)).toBe(null);
    });
  });
});
