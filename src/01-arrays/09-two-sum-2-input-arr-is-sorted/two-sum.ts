export function twoSum(numbers: number[], target: number): number[] {
  /*
  we are always dealing with sorted (non-descending) array

  [2, 7, 11, 15], target 9
   ^          ^
  left       right


   if arr[left] + arr[right] < target -> left++
   if arr[left] + arr[right] > target -> right--

  */
  let left = 0;
  let right = numbers.length - 1;
  const ans = [];

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      ans.push(left + 1);
      ans.push(right + 1);
    }

    if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
}
