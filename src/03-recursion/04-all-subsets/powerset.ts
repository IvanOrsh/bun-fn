export function powersetIter(arr: number[]): number[][] {
  /*

  [1, 2, 3] = [
    [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]
  ]

  3 elements - 2 ** 3 = 8 subsets

  2 possibilities:
    - to include
    - or not to include

  _   _   _
  2 * 2 * 2

  =======

  n elements - 2 ** n = 2^n subsets

  =======



  T = O(n * 2^n)
  S = O(n * 2^n)
  */
  const result: number[][] = [[]];

  for (let i = 0; i < arr.length; i++) {
    const len = result.length;
    for (let j = 0; j < len; j++) {
      result.push([...result[j], arr[i]]);
    }
  }

  return result;
}

export function powersetRec(arr: number[]): number[][] {
  /*
  [1, 8, 7]

  - if i === length -> push to results
  - 

  [] add or not

  T = O(2^n * n/2) = O(2^n * n)
  S = O(2^n * n)
  */

  const output: number[][] = [];

  function inner(nums: number[], i: number, subset: number[]) {
    if (i === nums.length) {
      output.push(subset.slice());
      return;
    }

    // don't add
    inner(nums, i + 1, subset);

    // add
    subset.push(nums[i]);
    inner(nums, i + 1, subset);
    subset.pop();
  }

  inner(arr, 0, []);

  return output;
}
