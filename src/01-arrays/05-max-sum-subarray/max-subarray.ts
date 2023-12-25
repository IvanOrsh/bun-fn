export function maxSubArray(nums: number[]): number {
  // [-2, 1, -3, 4, -1, 2, 1, -5, 4]

  // for (let i = 1; i < nums.length; i++) {
  //   nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  //   maxSum = Math.max(maxSum, nums[i]);
  // }

  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // currSum = Math.max(nums[i], nums[i] + currSum);
    if (currSum < 0) {
      currSum = nums[i];
    } else {
      currSum += nums[i];
    }

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}
