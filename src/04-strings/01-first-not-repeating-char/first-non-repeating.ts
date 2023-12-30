export function firstNonRepeatingCharBrute(str: string): number {
  // T = O(n^2)

  let repeat: boolean;

  for (let i = 0; i < str.length; i++) {
    repeat = false;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        repeat = true;
        break;
      }
    }

    if (repeat === false) {
      return i;
    }
  }

  return -1;
}

export function firstNonRepeatingCharMap(str: string): number {
  // T = O(n)
  // S = O(1), because we have limited number of allowed characters

  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], -1);
    } else {
      map.set(str[i], i);
    }
  }

  for (const value of map.values()) {
    if (value !== -1) {
      return value;
    }
  }

  return -1;
}
