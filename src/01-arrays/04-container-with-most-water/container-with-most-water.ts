export function maxAreaBrute(heights: number[]): number {
  /*
  - check every possibility: T = O(n^2), S = O(1)
  - example:
  [3, 7, 5, 6, 8, 5]
   i  j

  min(3, 7) * (j - i) => 3 * 1 = 3
  min(3, 5) * (j - i) => 3 * 2 = 6
  min(3, 6) * (j - i) => 3 * 3 = 9
  min(3, 8) * (j - i) => 3 * 4 = 12
  min(3, 5) * (j - i) => 3 * 5 = 15

  min(7, 5) * (j - i) => 5 * 1 = 5
  min(7, 6) * (j - i) => 6 * 2 = 12
  min(7, 8) * (j - i) => 7 * 3 = 21 MAX
  min(7, 5) * (j - i) => 5 * 4 = 20

  min(5, 6) * (j - i) => 5 * 1 = 5
  min(5, 8) * (j - i) => 5 * 2 = 10
  min(5, 5) * (j - i) => 5 * 3 = 15

  min(6, 8) * (j - i) => 6 * 1 = 6
  min(6, 5) * (j - i) => 5 * 2 = 10

  min(8, 5) * (j - i) => 5 * 1 = 5
  */

  let maxArea = 0;

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const h = Math.min(heights[i], heights[j]);
      const w = j - i;
      const area = h * w;

      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

export function maxArea(heights: number[]): number {
  /*
   0  1  2  3  4  5
  [3, 7, 5, 6, 8, 5]
   |              |

  we are gonna use 2 shifting pointers method:
  max possible width: 
  - pointer to the first element
  - pointer to the last element

  area = min(3, 5) * (5 - 0) = 3 * 5 = 15
  observations:
  - if pointers are moved -> width will decrease
  when moving pointers, what possibilities do we have:

  1. move from 3 to 7 -> height can increase
  2. move from 5 to 8 -> height cannot increase

  If we move the pointer, which is pointing to the lower value, there is a possibility to increase the area.

  Because we want the max area, we want to move the pointer to the lower value, because it gives the possibility to increase the area.

  from beginning:

  1) area = min(3, 7) * (5 - 0) = 3 * 5 = 15
     min(3, 5) = 3 => move 3 -> 7

  2) area = min(7, 5) * (5 - 1) = 5 *4 = 20
    min(7, 5) = 5 => move 5 -> 8

  3) area = min(7, 8) * (5 - 2) = 7 * 3 = 21
    min((7, 8) = 7 => move 7 -> 5

  4) area = min(5, 8) * (5 - 3) = 5 * 2 = 10
    min(5, 8) = 5 => move 5 -> 6

  5) area = min(6, 8) * (5 - 4) = 6 * 1 = 6

  T = O(n), S = O(1)
  */

  let maxArea = 0;
  let leftPtr = 0;
  let rightPtr = heights.length - 1;

  while (leftPtr < rightPtr) {
    const h = Math.min(heights[leftPtr], heights[rightPtr]);
    const w = rightPtr - leftPtr;
    const area = h * w;

    maxArea = Math.max(maxArea, area);

    if (heights[leftPtr] < heights[rightPtr]) {
      leftPtr++;
    } else {
      rightPtr--;
    }
  }

  return maxArea;
}
