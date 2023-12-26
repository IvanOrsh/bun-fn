export function twoSumBrute(nums: number[], target: number): number[] {
  // T = O(n^2)
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

export function twoSum(nums: number[], target: number): number[] {
  // T = O(n), S = O(n)
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // x = target - nums[i]
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }

  return [];
}
