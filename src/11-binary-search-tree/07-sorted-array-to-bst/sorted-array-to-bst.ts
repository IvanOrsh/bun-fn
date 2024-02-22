/*

                          3               3
[1, 2, 3, 4, 5] ->       / \    or       / \
                        2   4           2   4
                       /     \           \   \
                      1       5           1   5

-> height-balanced BST:
 -> same of almost same # of nodes in left & right part of the root node 

 -> thus , we need to pick the middle value to be the root value
 
  0  1  2  3  4  5  6  7  8
 [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ^           ^           ^
 left       middle       right

 middle = floor( left + right / 2 )

 -> then, recursively call the same fn on left and right part

 ============================================

 call stack:

   rright  7,   8    floor(7 + 8 / 2) = 7 => arr[7] = 8
          -------
   rleft   5,   5    floor(5 + 5 / 2) = 5 => arr[5] = 6
          -------
   lright  2    3    floor(2 + 3 / 2) = 2 => arr[2] = 3
          ------- 
   lleft   0,   0    floor(0 + 0 / 2) = 0 => arr[0] = 1
          -------                                                
   right   5,   8    floor(5 + 8 / 2) = 6 => arr[6] = 7                  5
           -------                                                   /       \
   left    0,   3    floor(0 + 3 / 2) = 1 => arr[1] = 2             2         7
           -------                                                /  \      /  \
   root    0,   8    floor(0 + 8 / 2) = 4 => arr[4] = 5          1    3    6    8
            ^    ^                                              /\   / \  /\   / \
          left   right                                        null null 4 null    9
*/

export class Node {
  constructor(
    public value: number,
    public left: Node | null = null,
    public right: Node | null = null
  ) {}
}

export function buildBSTFromSortedArray(
  arr: number[],
  left = 0,
  right = arr.length - 1
) {
  // T = O(n)
  // S = O(n)

  // base case
  if (left > right) {
    return null;
  }

  const middle = Math.floor((left + right) / 2);
  const root = new Node(arr[middle]);

  root.left = buildBSTFromSortedArray(arr, left, middle - 1);
  root.right = buildBSTFromSortedArray(arr, middle + 1, right);

  return root;
}
