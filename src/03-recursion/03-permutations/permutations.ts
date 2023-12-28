export function permutations(arr: number[]): number[][] {
  /* 
  ex: 3 elements -> 3! permutations (1 * 2 * 3 = 6)
      4 elements -> 4!
      and so on...

   0  1  2
  [1, 2, 3]

  i, j - pointers to elements to swap

  to swap:
  i = 0 j = 0 => [1, 2, 3]
    i = 1 j = 1 => [1, 2, 3]
    i = 1 j = 2 => [1, 3, 2]

  i = 0 j = 1 => [2, 1, 3]
    i = 1 j = 1 => [2, 1, 3]
    i = 1 j = 2 => [2, 3, 1]
  
  i = 0 j = 2 => [3, 2, 1]
    i = 1 j = 1 => [3, 2, 1]
    i = 1 j = 2 => [3, 1, 2]

  when i === last index, we stop


  T = O(n * n!)
  S = O(n * n!)
  */
  const permutations: number[][] = [];

  function inner(nums: number[], i: number) {
    if (i === nums.length - 1) {
      permutations.push(nums.slice()); // !
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      inner(nums, i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  inner(arr, 0);

  return permutations;
}
