import { describe, it, expect } from "bun:test";

import { getDiameter, BinaryTree } from "./diameter-of-binary-tree";

/*
            1
           / \
          2   3
            3/ \4
            4   5
          2/     \5
          6       7
        1/         \6
     -> 8           9 <-
         diameter = 6

      1, 2, 3, null, null, 4, 5, 6, null, null, 7, 8, null, null, 9

*/

describe("Test getDiameter", () => {
  it("should return 0 for empty tree", () => {
    const tree = new BinaryTree();
    expect(getDiameter(tree.root)).toEqual(0);
  });

  it("should return 6 for a given tree", () => {
    const tree = new BinaryTree();
    tree.insert([1, 2, 3, null, 4, 5, 6, null, null, 7, 8, null, null, 9]);

    expect(getDiameter(tree.root)).toEqual(6);
  });

  it("should return 6 for a given tree", () => {
    const tree = new BinaryTree();
    tree.insert([
      1,
      3,
      2,
      7,
      4,
      null,
      null,
      8,
      null,
      null,
      5,
      9,
      null,
      null,
      6,
    ]);

    expect(getDiameter(tree.root)).toEqual(6);
  });
});
