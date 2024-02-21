import { describe, it, expect } from "bun:test";

import {
  invertBtRecursive,
  invertBtIterative,
  BinaryTree,
} from "./invert-binary-tree";

/*
    1              1
   / \            / \
  2   3     ->   3   2
 / \ / \        / \ / \
4  5 6  7      7  6 5  4

    1              1
   / \            / \
  2   3     ->   3   2
 / \ /            \ / \
4  5 6            6 5  4
*/

describe("Test invertBtRecursive", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5, 6, 7],
      result: [1, 3, 2, 7, 6, 5, 4],
    },
    {
      arr: [1, 2, 3, 4, 5, 6, null],
      result: [1, 3, 2, null, 6, 5, 4],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const tree = new BinaryTree();
    tree.insert(arr);

    const expected = new BinaryTree();
    expected.insert(result);

    invertBtRecursive(tree.root);

    // traverse trees and compare
    expect(tree.root?.value).toBe(expected.root?.value);
    expect(tree.root?.left?.value).toBe(expected.root?.left?.value);
    expect(tree.root?.right?.value).toBe(expected.root?.right?.value);
    expect(tree.root?.left?.left?.value).toBe(expected.root?.left?.left?.value);
    expect(tree.root?.left?.right?.value).toBe(
      expected.root?.left?.right?.value
    );
    expect(tree.root?.right?.left?.value).toBe(
      expected.root?.right?.left?.value
    );
    expect(tree.root?.right?.right?.value).toBe(
      expected.root?.right?.right?.value
    );
  });
});

describe("Test invertBtIterative", () => {
  it.each([
    {
      arr: [1, 2, 3, 4, 5, 6, 7],
      result: [1, 3, 2, 7, 6, 5, 4],
    },
    {
      arr: [1, 2, 3, 4, 5, 6, null],
      result: [1, 3, 2, null, 6, 5, 4],
    },
  ])("$arr should return $result", ({ arr, result }) => {
    const tree = new BinaryTree();
    tree.insert(arr);

    const expected = new BinaryTree();
    expected.insert(result);

    invertBtIterative(tree.root);

    // traverse trees and compare
    expect(tree.root?.value).toBe(expected.root?.value);
    expect(tree.root?.left?.value).toBe(expected.root?.left?.value);
    expect(tree.root?.right?.value).toBe(expected.root?.right?.value);
    expect(tree.root?.left?.left?.value).toBe(expected.root?.left?.left?.value);
    expect(tree.root?.left?.right?.value).toBe(
      expected.root?.left?.right?.value
    );
    expect(tree.root?.right?.left?.value).toBe(
      expected.root?.right?.left?.value
    );
    expect(tree.root?.right?.right?.value).toBe(
      expected.root?.right?.right?.value
    );
  });
});
