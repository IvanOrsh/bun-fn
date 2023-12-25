export function majorityElement(arr: number[]): number {
  // let maxCount = 0;
  // let candidate = 0;

  // for (let num of arr) {
  //   if (maxCount === 0) {
  //     candidate = num;
  //   }

  //   if (num === candidate) {
  //     maxCount++;
  //   }

  //   if (num !== candidate) {
  //     maxCount--;
  //   }
  // }

  // return candidate;

  arr.sort();
  return arr[Math.floor(arr.length / 2)];
}
