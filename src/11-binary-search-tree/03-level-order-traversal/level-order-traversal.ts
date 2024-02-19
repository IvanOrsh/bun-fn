/*
INSERT:
[7, 11, 1, null, 7, 2, 8, null, null, null, 3, null, null, 5, null]
     ^
     i

 queue: [7,  ]

 while something in queue
  -> dequeue
  -> if (not left) -> if value no null insert it
  -> if (left) -> enqueue
  -> i++

  -> if (not right)  
  -> if (right) -> enqueue

====

LEVEL ORDER TRAVERSAL:

              7
            /   \
          11     1
         /  \   / \
      null   7 2   8
                \
                 3
                /
               5

   [[7], [11, 1], [7, 2, 8], [3], [5]]

Observations:

-> BFS: 7, 11, 1, 7, 2, 8, 3, 5 - same order
-> each level is an array


queue: [7],       queue length: 1        count = 1
queue: [11, 1]    queue length: 2        count = 2   
queue: [7, 2, 8]
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

export function levelOrderTraversal<T>(root: Node<T> | null): Array<Array<T>> {
  if (!root) return [];

  const output: Array<Array<T>> = [];

  const queue = [root];

  while (queue.length) {
    let length = queue.length;
    let count = 0;
    const currLevelVals: Array<T> = [];
    while (count < length) {
      const curr = queue.shift()!;
      currLevelVals.push(curr.value);

      // left
      if (curr.left) {
        queue.push(curr.left);
      }

      // right
      if (curr.right) {
        queue.push(curr.right);
      }

      count++;
    }

    output.push(currLevelVals);
  }

  return output;
}
