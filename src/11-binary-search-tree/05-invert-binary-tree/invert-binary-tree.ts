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

export function invertBtRecursive<T>(root: Node<T> | null): Node<T> | null {
  if (!root) return null;
  const left = invertBtRecursive(root.left);
  const right = invertBtRecursive(root.right);
  root.left = right;
  root.right = left;
  return root;
}

export function invertBtIterative<T>(root: Node<T> | null): Node<T> | null {
  if (!root) return null;
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (current) {
      // swap left and right for a particular node
      const left = current.left;
      current.left = current.right;
      current.right = left;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  return root;
}
