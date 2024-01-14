/*
  array -> n + 1 integers: [1, n]
  exactly one integer repeats itself
  
   0  1  2  3  4
  [1, 4, 3, 2, 3]: range [1, 4] n=5

  1, 2, 3, 4, will be there at least 1 time
  one number is repeated

  index 0 points to 1,
  index 1 points to 4
  index 4 points to 3
  index 3 points to 2
  index 2 points to 3

  0 -> 1 -> 4 -> 3 -> 2
                 ^ <-
                 
  cycle that starts at 3 -> repeated number
*/

export function findDuplicate(nums: number[]): number {
  // T = O(n), S = O(1)
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }
      return pointer;
    }
  }
}
