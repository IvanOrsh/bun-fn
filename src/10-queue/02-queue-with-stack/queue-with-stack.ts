/*

 |                |
 push            pop
 |                |
 |                |
|IN stack |   |OUT stack |
--------      -------
 |pop ---->   |push
*/

export class QueueWithStacks<T> {
  private inStack: T[] = [];
  private outStack: T[] = [];
  public size = 0;

  enqueue(element: T) {
    this.inStack.push(element);
    this.size++;
  }

  dequeue(): T | undefined {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }

    this.size--;
    return this.outStack.pop();
  }

  peek(): T | undefined {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    // or just return this.size
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}
