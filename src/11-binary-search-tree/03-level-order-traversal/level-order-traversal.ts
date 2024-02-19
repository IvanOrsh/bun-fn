/*

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

  insert(arr: T[]) {}
}
