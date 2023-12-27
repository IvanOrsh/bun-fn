type PeculiarArr = number[] | number | PeculiarArr[];

export function powerSum(pecArr: PeculiarArr[], depth = 1): number {
  /*
  T = O(n), n - total number of elements in main array & all sub arrays
  S = O(d), d - max depth -> # recursive calls at once
  */
  let runningSum = 0;

  for (let i = 0; i < pecArr.length; i++) {
    if (typeof pecArr[i] === "number") {
      runningSum += pecArr[i] as number;
    } else if (pecArr[i] instanceof Array) {
      runningSum += powerSum(pecArr[i] as PeculiarArr[], depth + 1);
    }
  }

  return runningSum ** depth;
}
