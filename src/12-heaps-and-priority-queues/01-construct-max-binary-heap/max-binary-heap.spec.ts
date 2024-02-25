import { describe, it, expect } from "bun:test";

import { MaxBinaryHeap } from "./max-binary-heap";

describe("Test MaxBinaryHeap", () => {
  describe("Test buildHeap", () => {
    it("should return a MaxBinaryHeap", () => {
      const maxBinaryHeap = new MaxBinaryHeap();
      expect(maxBinaryHeap).toBeInstanceOf(MaxBinaryHeap);
    });

    it("should build a MaxBinaryHeap", () => {
      const arr = [5, 3, 17, 10, 84, 19, 6, 22, 9];
      const expected = [84, 22, 19, 10, 3, 17, 6, 5, 9];
      /*

          5                 84
         /  \             /   \
        3   17      ->   22    19
       / \   / \        / \    / \
      10 84 19  6      10  3  17  6
     / \               / \
    22  9             5   9
         

      */
      const maxBinaryHeap = new MaxBinaryHeap().buildHeap(arr);
      expect(maxBinaryHeap.heap).toEqual(expected);
    });

    it("should build a MaxBinaryHeap", () => {
      const arr = [4, 7, 3, 0, 9, 3, 2, 6];
      const expected = [9, 7, 3, 6, 4, 3, 2, 0];
      /*

          4                9
         /  \            /  \
        7    3   ->     7    3
       / \   / \       / \   / \
      0  9  3   2     6  4  3   2
     /               /         
    6               6
         

      */
      const maxBinaryHeap = new MaxBinaryHeap().buildHeap(arr);
      expect(maxBinaryHeap.heap).toEqual(expected);
    });
  });

  describe("Test extractMax", () => {
    it("should return the max value", () => {
      const maxBinaryHeap = new MaxBinaryHeap().buildHeap([
        5, 3, 17, 10, 84, 19, 6, 22, 9,
      ]);
      const expectedHeapAfterExtractMax = [22, 10, 19, 9, 3, 17, 6, 5];

      /*
            22
           / \
          10  19
         / \  / \
        9   3 17  6
       / 
      5

      */

      expect(maxBinaryHeap.extractMax()).toBe(84);
      expect(maxBinaryHeap.heap).toEqual(expectedHeapAfterExtractMax);
    });
  });

  describe("Test insert", () => {
    it("should insert a value to an empty heap", () => {
      const maxBinaryHeap = new MaxBinaryHeap();
      maxBinaryHeap.insert(5);
      expect(maxBinaryHeap.heap).toEqual([5]);
    });

    it("should insert a value to a heap", () => {
      const maxBinaryHeap = new MaxBinaryHeap().buildHeap([
        5, 3, 17, 10, 84, 19, 6, 22, 9,
      ]);
      maxBinaryHeap.insert(0);
      expect(maxBinaryHeap.heap).toEqual([84, 22, 19, 10, 3, 17, 6, 5, 9, 0]);
    });

    it("should insert a value to a heap", () => {
      const maxBinaryHeap = new MaxBinaryHeap().buildHeap([
        5, 3, 17, 10, 84, 19, 6, 22, 9,
      ]);
      maxBinaryHeap.insert(15);
      const expected = [84, 22, 19, 10, 15, 17, 6, 5, 9, 3];

      /*

               84
            /      \
           22       19
          /  \      / \
         10  15    17  6
        / \  / 
       5  9 3

      */
      expect(maxBinaryHeap.heap).toEqual(expected);
    });
  });
});
