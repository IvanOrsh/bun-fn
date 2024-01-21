import { describe, it, expect } from "bun:test";

import { BinarySearchTree, TreeNode } from "./bst";

describe("Test traverse methods", () => {
  const tree = new BinarySearchTree();
  tree
    .insert(20)
    .insert(13)
    .insert(40)
    .insert(10)
    .insert(13)
    .insert(43)
    .insert(8)
    .insert(11)
    .insert(41);

  it("Test BFS", () => {
    expect(tree.traverseBFS().map((node) => node.value)).toEqual([
      20, 13, 40, 10, 13, 43, 8, 11, 41,
    ]);
  });

  it("Test DFS in-order", () => {
    expect(tree.traverseDFSinOrder().map((node) => node.value)).toEqual([
      8, 10, 11, 13, 13, 20, 40, 41, 43,
    ]);
  });

  it("Test DFS pre-order", () => {
    expect(tree.traverseDFSpreOrder().map((node) => node.value)).toEqual([
      20, 13, 10, 8, 11, 13, 40, 43, 41,
    ]);
  });

  it("Test DFS post-order", () => {
    expect(tree.traverseDFSpostOrder().map((node) => node.value)).toEqual([
      8, 11, 10, 13, 13, 41, 43, 40, 20,
    ]);
  });
});
