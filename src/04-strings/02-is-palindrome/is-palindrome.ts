export function isPalindromeBrute(str: string): boolean {
  // creating an array from the string starting from the end and compare
  // T = O(n)
  return str === str.split("").reverse().join("");
}

export function isPalindrome(str: string): boolean {
  if (str.length <= 1) {
    return true;
  }

  let left = 0;
  let right = str.length - 1;

  while (left < right && left < str.length && right >= 0) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
