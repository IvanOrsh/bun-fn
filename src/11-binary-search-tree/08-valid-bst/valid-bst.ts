/*
                     -inf < val < inf
                            10   
                   /                 \
        -inf < val < 10              10 < val < inf
               5                           20
        /            \                 /            \
-inf < val < 5    5 < val < 10   10 < val < 20    20 < val < inf
      3                7              15               30
       \                               \
  3 < val < 5                    15 <  val < 20
       4                               17
                                        \
                                         18

Pattern:

- started with 10 as root
- when we move towards the left, we change the maximum (10 -> 5 -> 3) for the value of that particular node
- when we move towards the right, we change the minimum (10 -> 20 -> 30)

LEFT -> change max
RIGHT -> change min

Recursive solution
-> check if left subtree is a valid BST
-> check if right subtree is a valid BST

*/

class Node {
  constructor(
    public value: number,
    public left: Node | null = null,
    public right: Node | null = null
  ) {}
}

export class BinaryTree {
  constructor(public root: Node | null = null) {}

  insert(arr: Array<number | null>) {
    if (arr.length === 0) return;

    let i = 0;

    // create root
    if (!this.root) {
      if (arr[0] === 0) return;

      let node = new Node(arr[0] as number);
      this.root = node;
      i++;

      if (i === arr.length) return this;
    }

    // insert elements, use queue, similar to BFS
    const queue = [this.root];
    while (queue.length) {
      let current = queue.shift();

      // left
      if (!current!.left) {
        if (arr[i] !== null) {
          let node = new Node(arr[i] as number);
          current!.left = node;
        }
        i++;
        if (i === arr.length) return this;
      }

      if (current?.left) {
        queue.push(current.left);
      }

      // right
      if (!current!.right) {
        if (arr[i] !== null) {
          let node = new Node(arr[i] as number);
          current!.right = node;
        }
        i++;
        if (i === arr.length) return this;
      }

      if (current?.right) {
        queue.push(current.right);
      }
    }
  }
}

export function isValidBST(root: Node | null): boolean {
  return helper(root, -Infinity, Infinity);
}

function helper(node: Node | null, min: number, max: number): boolean {
  if (!node) return true;

  if (node.value <= min || node.value >= max) return false;

  const isLeftBst = helper(node.left, min, node.value);
  const isRightBst = helper(node.right, node.value, max);

  return isLeftBst && isRightBst;
}
