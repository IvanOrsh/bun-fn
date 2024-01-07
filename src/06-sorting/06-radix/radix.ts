/*

We are gonna be using Counting Sort for Radix sort.

============================================

[123, 79, 63, 19, 5]        sort based on ones
   ^   ^   ^   ^  ^  
123, 63, 05, 79, 19         sort based on tenths
 ^   ^   ^   ^   ^
005, 019, 123, 063, 079     sort based on hundreds
^    ^    ^    ^    ^ 
005, 019, 063, 079, 123

- Stable
- Good Time Complexity

============================================
Counting Sort
  
              |  <--
7 5 3 0 1 3 7 8 say, each el should be in range 0..9

0 1 2 3 4 5 6 7 8 9
1 1 0 2 0 1 0 2 1 0

                0 1 2 3 4 5 6 7 8 9
cumulative sum: 1 2 2 4 4 5 5 7 8 8 <----
                                  ^

              at index 8 we have 8, which means, that we have 8 elements that are less than 8, so 
              8 goes to 8 - 1 = 7 index of the resulting array 




               0 1 2 3 4 5 6 7 (same as input)  <---
output array:                8

               0 1 2 3 4 5 6 7
                           7 8

               0 1 2 3 4 5 6 7
                     3     7 8

T = O(N + K), K = range of digits
S = O(N + K)
==================================================
Counting Sort to implement Radix Sort

0 384                        73                       247                       065
1  73                       183                        65                       073
2 384                       384                        73                       183
3 183 --counting sort -->   374  --counting sort -->  374  --counting sort -->  185
4  65   use based on         65    based on tens      183    based on 100's     247
5 247   units digit         185                       384                       374
6 185                       247                       185                       384
 
0 1 2 3 4 5 6               0 1 2 3 4 5 6
4 3 4 3 5 7 5               7 8 8 7 6 8 4
            ^ <-- 

freq:                   
0 1 2 3 4 5 6 7 8 9         0 1 2 3 4 5 6 7 8 9
0 0 0 2 2 2 0 1 0 0         0 0 0 0 1 0 1 2 3 0

cum (bear):               
0 0 0 2 4 6 6 7 7 7         0 0 0 0 1 1 2 4 7 7
          ^          


T = O(d * (n + K)), d - largest number of digits = O(d * n)
S = O(n + k)
*/

export function radixSort(arr: number[]) {
  if (arr.length < 2) return arr;

  // find the number of digits in the greatest number
  // log_10(10) = 1
  // log_10(100) = 2
  // log_10(1000) = 3
  // Math.floor(log_10(234)) = 2
  // 1766: # of digits = Math.floor(log_10(1766)) + 1 = 4
  const max = Math.max(...arr);
  const numberOfDigits = Math.floor(Math.log10(max)) + 1;

  // the counting sort has to be done x number of times, where x = numberOfDigits
  for (let i = 0; i < numberOfDigits; i++) {
    countingSort(arr, i);
  }
}

function countingSort(arr: number[], digit: number) {
  const output = new Array(arr.length).fill(0);
  const freq = new Array(10).fill(0);

  // identify a digit that we need:
  // 241 on ones > 1
  // 241 on tens > 4
  // ...
  const digitPlace = 10 ** digit;

  for (const num of arr) {
    const digitNum = Math.floor(num / digitPlace) % 10;
    freq[digitNum]++;
  }

  for (let i = 1; i < 10; i++) {
    freq[i] += freq[i - 1]; // cum sum
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const currDigit = Math.floor(arr[i] / digitPlace) % 10;
    freq[currDigit]--;
    const insertPosition = freq[currDigit];
    output[insertPosition] = arr[i];
  }

  for (let i = 0; i < output.length; i++) {
    arr[i] = output[i];
  }
}
