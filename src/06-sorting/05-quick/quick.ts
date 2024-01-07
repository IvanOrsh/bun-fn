/*
    Quick Sort

    - divide and conquer algorithm

    1. select 1 element - pivot
    2. find it's correct place in the sorted array

    ---------------------------------
    example: 1

     0  1  2  3  4            0  1  2  3  4
    [6, 3, 1, 9, 5]   sorted:[1, 3, 5, 6, 9]

    - select a pivot - any element

    - all elements  < pivot <  all elements
    - 6:
    left: 3, 1, 5
    right: 9

      0  1  2  3  4
    - 3, 1, 5, 6, 9, notice, that index of 6 is 3, which is correct index (same as in sorted)

  ---------------------------------
  example: 2

   0   1   2   3   4   5   6  7   8
  [14, 22, 12, 18, 19, 11, 8, 13, 9]
   ^    ^                         ^
pivot   i->                     <-j

  - move every element that is less than 14 (pivot) to the left of 14 (pivot)
  - move every element that is greater than 14 (pivot) to the right of 14 (pivot)

  1. move i till the element is greater than pivot
  2. move j till the element is less than pivot
  3. in our case, both i and j stops immediately (since arr[i] > 14, and arr[j] < 14)
  4. now, swap them:

  0   1   2   3   4   5   6  7   8
  [14, 9, 12, 18, 19, 11, 8, 13, 22]
   ^    ^                         ^
pivot   i->                     <-j

  0   1   2   3   4   5   6  7   8
  [14, 9, 12, 18, 19, 11, 8, 13, 22]
   ^           ^              ^
pivot          i->           <-j

swap

  0   1   2   3   4   5   6  7   8
  [14, 9, 12, 13, 19, 11, 8, 18, 22]
   ^           ^              ^
pivot          i->           <-j

  0   1   2   3   4   5   6  7   8
  [14, 9, 12, 13, 19, 11, 8, 18, 22]
   ^               ^      ^
pivot              i->   <-j

swap

  0   1   2   3   4   5   6  7   8
  [14, 9, 12, 13, 8, 11, 19, 18, 22]
   ^                 ^    ^      
pivot              <-j    i->

now swap pivot and the last item (11)

  0   1   2   3   4   5   6  7   8
  [11, 9, 12, 13, 8, 14, 19, 18, 22]
   ^                 ^    ^      
pivot              <-j    i->

and so we achieved the desired elements < 14(pivot) < elements

- now do quick sort recursively on both sides

=============================================================
TIME COMPLEXITY

if we choose middle as our pivot, T = O(n * log(n)) - in each level (log(n)) we do n comparisons - BEST CASE

if we always pick first / last element as pivot, T  = (n + (n-1) + (n-2) + ... + 1) = O(n^2) - in each level we do n comparisons - WORST CASE

How to avoid worst case?

- pick random element (or middle element)

=============================================================
SPACE COMPLEXITY

- works in place
- but uses space on CALL STACKS

- Max size of stack -> the depth is n => S = O(n) (already is already sorted)
- Best case => S = O(log(n))

- Sedwick: "There is a way to limit the auxiliary space to O(log(n))" (not a quote):
  - Recursive Call on lower sized subarray


What Sedwick might have proposed:

while (start < end)
  get pivot
  if left subarray is smaller
    quicksort it
    start = pivot + 1
  if right subarray is smaller
    quicksort it
    end = pivot - 1
 
  
*/

export function quickSort(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
) {
  while (start < end) {
    const pivotIdx = partition(arr, start, end);

    // _ _ _ _ _ _ _ _ pivotIdx_ _ _ _ _ _ _ _ _ _ _
    // pivotIdx - start        end - pivotIdx

    // recursively call quick sort on lower sided subarray
    if (pivotIdx - start < end - pivotIdx) {
      quickSort(arr, start, pivotIdx - 1);
      start = pivotIdx + 1;
    } else {
      quickSort(arr, pivotIdx + 1, end);
      end = pivotIdx - 1;
    }
  }
}

function partition(arr: number[], start: number, end: number): number {
  const middle = Math.floor((start + end) / 2);

  // swap middle and fist element to avoid worst case
  // 1, 2, 3, 4, 5
  // 3, 2, 1, 4, 5
  swap(arr, middle, start);

  let pivot = arr[start];
  let i = start + 1;
  let j = end;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    // i and j are not in order
    if (i < j) {
      swap(arr, i, j);
    }
  }

  // j < i
  swap(arr, start, j); // our pivot was at start

  return j;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Alternative solution

export function quickSortAlt(arr: number[], start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIdx = partition(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
}
