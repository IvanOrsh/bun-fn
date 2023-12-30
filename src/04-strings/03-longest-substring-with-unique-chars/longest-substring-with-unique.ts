export function longestSubstringLengthBrute(str: string): number {
  /*
 example: pqbrstburwvxy

 brute force:

 1) form all substrings -> (T = n(n + 1) / 2 ~ O(n^2))) p, q, b, r, ..., pq, qb, ...
 2) identify substrings of unique characters 
 2) identify the longest substring

 total: O(n^3)
*/

  const isUniqueChars = (str: string): boolean => {
    const set = new Set(str);
    return set.size === str.length;
  };

  // form all substrings:

  const substrings: string[] = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }

  // identify substrings of unique characters:

  const uniqueSubstrings: string[] = [];

  for (const substring of substrings) {
    if (isUniqueChars(substring)) {
      uniqueSubstrings.push(substring);
    }
  }

  // identify the longest substring:
  let longestSubstring = "";
  for (const substr of uniqueSubstrings) {
    if (substr.length > longestSubstring.length) {
      longestSubstring = substr;
    }
  }

  return longestSubstring.length;
}

export function longestSubstringLength(str: string): number {
  // T = O(n)
  // S = O(min(m, m)), where m is the # of unique characters
  /*
    using hashmap and sliding window

    seen = {}
    start = 0
    max = 0
    
    i = 0
    0 1 2 3 4 5 6 7 8 9 10 11 12
    p q b r s t b u r w  v  x  y
    ^
  start

  i = 0, start = 0
  p not in seen  =>  seen[p] = i => seen[p] = 0, 
  max = Max(max, i - start +1 => max = 1,
  i++

  ---

  i = 1, start = 0
  q not in seen => seen[q] = i => seen[q] = 1,
  max = Max(max, i - start + 1) => max = 2,
  i++

  ---

  i = 2, start = 0
  b not in seen => seen[b] = i => seen[b] = 2,
  max = Max(max, i - start + 1) => max = 3,
  i++

  ---

  ...

  when we run into a chars that is already in seen, we will move the start pointer to the max seen index + 1

  */

  let max = 0;
  let start = 0;
  let seen: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char in seen) {
      start = Math.max(start, seen[char] + 1);
    }
    max = Math.max(max, i - start + 1);
    seen[char] = i;
  }

  return max;
}
