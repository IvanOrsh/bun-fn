/*

            1    h=4
           / \
h=0       2   3      h=3
            3/ \4
            4   5      h=2
          2/     \5
          6       7       h=1
        1/         \6
     -> 8           9 <-     h=0
         diameter = 6

Observations:

- What is the diameter through 1?
- What's the # of edges between 2 to 9?
- let's go bottom up and find diameter at every node

some recap:

height of node = # edges in longest path from node to leaf node
height of leaf node = 0
height of null tree = -1

Thus DIAMETER of node = HEIGHT(left) + HEIGHT(right) + 1 + 1
HEIGHT(node) = MAX(HEIGHT(left), HEIGHT(right)) + 1

---

maxDiameter = 0

dfs {

  if null return -1

  LH = dfs(left)
  RH = dfs(right)

  diameter = LH + RH + 1 + 1

  maxDiameter = max(maxDiameter, diameter)

  return max(LH, RH) + 1
}
*/

class Node<T> {
  constructor(
    public value: T,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) {}
}

export class BinaryTree<T> {
  constructor(public root: Node<T> | null = null) {}

  insert(arr: Array<T | null>) {
    if (arr.length === 0) return;

    let i = 0;

    // create root
    if (!this.root) {
      if (arr[0] === 0) return;

      let node = new Node(arr[0] as T);
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
          let node = new Node(arr[i] as T);
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
          let node = new Node(arr[i] as T);
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

export function getDiameter<T>(root: Node<T> | null): number {
  if (!root) return 0;

  let maxDiameter = 0;

  const dfs = (node: Node<T> | null): number => {
    if (!node) return -1; // height of a null tree is -1

    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);
    let diameter = leftHeight + rightHeight + 1 + 1;

    maxDiameter = Math.max(maxDiameter, diameter);

    return Math.max(leftHeight, rightHeight) + 1; // height of a particular node
  };

  dfs(root);

  return maxDiameter;
}
