/*

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

export function rightView<T>(root: Node<T> | null): Array<T> {
  if (!root) return [];

  const right: Array<T> = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;

    while (count < length) {
      count++;
      const curr = queue.shift();
      // last element - rightmost element
      if (count === length) {
        right.push(curr!.value);
      }

      if (curr?.left) {
        queue.push(curr.left);
      }

      if (curr?.right) {
        queue.push(curr.right);
      }
    }
  }

  return right;
}

export function leftView<T>(root: Node<T> | null): Array<T> {
  if (!root) return [];

  const left: Array<T> = [];
  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;

    while (count < length) {
      count++;
      const curr = queue.shift();
      // first element
      if (count === 1) {
        left.push(curr!.value);
      }

      if (curr?.left) {
        queue.push(curr.left);
      }

      if (curr?.right) {
        queue.push(curr.right);
      }
    }
  }

  return left;
}
