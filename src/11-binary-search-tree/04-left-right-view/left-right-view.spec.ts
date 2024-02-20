import { describe, it, expect } from "bun:test";

import { rightView, leftView, BinaryTree } from "./left-right-view";

describe("Test right view", () => {
  it.each([
    {
      arr: [],
      result: [],
    },
    {
      arr: [7, 11, 1, null, 7, 2, 8, null, null, null, 3, null, null, 5, null],
      result: [7, 1, 8, 3, 5],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const tree = new BinaryTree();
    tree.insert(arr);

    expect(rightView(tree.root)).toEqual(result);
  });
});

/*
              7
            /   \
          11     1   <- right view
         /  \   / \
      null   7 2   8
                \
                 3
                /
               5

right view: 7 1 8 3 5
left view: 7 11 7 3 5


*/

describe("Test left view", () => {
  it.each([
    {
      arr: [],
      result: [],
    },
    {
      arr: [7, 11, 1, null, 7, 2, 8, null, null, null, 3, null, null, 5, null],
      result: [7, 11, 7, 3, 5],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const tree = new BinaryTree();
    tree.insert(arr);

    expect(leftView(tree.root)).toEqual(result);
  });
});
