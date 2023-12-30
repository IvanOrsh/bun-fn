export function groupAnagrams(strs: string[]): string[][] {
  /*

  car arc 

  need to sort: acr, acr -> same word!

  ===
  
  T = O(s * nlogn) (sort each string)
  S = O(s * n)




  */
  const hash: Record<string, string[]> = {};

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!hash[key]) {
      hash[key] = [];
    }
    hash[key].push(str);
  }

  return Object.values(hash);
}
