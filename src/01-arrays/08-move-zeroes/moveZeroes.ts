export function moveZeroes(nums: number[]): void {
  /*

  start = 0
  i = 0

  main idea: if nums[i] !== 0, swap nums[i] with nums[start] and increment start

   0  1  2  3  4
  [0, 1, 0, 3, 12]
   ^

   [0, 1, 0, 3, 12] start: 0
       ^
    nums[i] !== 0 => swap and increment start

   [1, 0, 0, 3, 12] start: 1
          ^

   [1, 0, 0, 3, 12]
             ^
    nums[i] !== 0 => swap and increment start

   [1, 3, 0, 0, 12] start: 2
                 ^
    nums[i] !== 0 => swap and increment start
    
   [1, 3, 12, 0, 0] start: 3

  */

  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[start]] = [nums[start], nums[i]];
      // swap(nums, i, start);
      start++;
    }
  }
}

export function moveZeroesAlt(nums: number[]): void {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else if (count > 0) {
      nums[i - count] = nums[i];
      nums[i] = 0;
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
