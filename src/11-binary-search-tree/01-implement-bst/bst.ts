export interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): BinarySearchTree {
    const newNode: TreeNode = {
      value,
      left: null,
      right: null,
    };

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      return this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode): BinarySearchTree {
    /*
              20
             / \
          left  right
            6       35
           / \     / \
          3   8   27  55
         /\       /\    \ 
        1  3     25 29   60
    */

    // recursive approach:
    /*
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
    */

    // iterative approach:
    while (true) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  find(value: number) {
    return this.findNode(this.root, value);
  }

  findNode(node: TreeNode | null, value: number): TreeNode | null {
    // recursive:
    /*
    if (node === null) {
      return null;
    }
    if (value === node.value) {
      return node;
    }
    if (value < node.value) {
      return this.findNode(node.left, value);
    } else {
      return this.findNode(node.right, value);
    }
    */

    // iterative approach:
    while (node) {
      if (value === node.value) {
        return node;
      }
      if (value < node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }

    return null;
  }

  remove(
    value: number,
    currentNode: TreeNode | null = this.root,
    parent: TreeNode | null = null
  ): BinarySearchTree | null {
    /*
              20
              / \
          left  right
            6       35
           / \     / \
          3   8   27  55
         /\       /\    \ 
        1  3     25 29   60

    1. is a leaf, for example 25:
    2. has only one child
    3. has 2 children:
      - find the node
      - replace with inorder predecessor / successor
        (for example, find the smallest (leftmost) element in the right subtree)


      example: remove 20:
        - replace with the smallest element in right subtreeL

              25
              / \
          left  right
            6       35
           / \     / \
          3   8   27  55
         /\        \    \ 
        1  3       29   60

    
      */

    if (!this.root) {
      return null;
    }

    while (currentNode) {
      if (value < currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parent = currentNode;
        currentNode = currentNode.right;
      } else {
        // found the node to be deleted
        // 1. node to be deleted has 2 children
        if (currentNode.left !== null && currentNode.right !== null) {
          currentNode.value = this.getMin(currentNode.right);
          this.remove(currentNode.value, currentNode.right, currentNode);
        }

        // if deleting the root node
        // 2. has only one child
        else if (parent === null) {
          if (currentNode.left !== null) {
            /*
                    say, we are deleting 20:

                    20               6
                    /               / \
                   6     --->      3   8
                  / \   
                 3   8
              */
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right !== null) {
            /*
                    say, we are deleting 20:

                    20               35
                     \              / \
                     35    --->   27   55
                    / \   
                  27   55
              */
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else {
            // this is a single node bst
            this.root = null;
          }
        } else if (currentNode === parent.left) {
          parent.left =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        } else if (currentNode === parent.right) {
          parent.right =
            currentNode.left !== null ? currentNode.left : currentNode.right;
        }
        // break out of while loop
        break;
      }
    }

    console.log(currentNode?.value);

    return this;
  }

  getMin(node: TreeNode): number {
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }
}
