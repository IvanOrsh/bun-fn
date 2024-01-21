## Binary Search Tree

### Tree

A **tree** is a widely used data structure that consists of **nodes** connected by **edges**.

A tree is a **hierarchical data structure** with a top node called the **root**, and each node has zero or more **child nodes**.

**Node**: Each element in a tree is a node that contains a value and a reference to its child nodes.

**Root**: The top node of the tree.

**Parent/Child**: Nodes are connected by edges, where one node is the parent of another node.

**Leaf**: A node with no children.

**Depth**: The depth of a node is the length of the path to the root.

**Height**: The height of a tree is the maximum depth of any node in the tree.

---

- rooted
- acyclic
- directed: edges point downwards
- not disconnected
- each node can have only one parent

### BST (Binary Search Tree)

A **binary search tree** is a type of binary tree in which every node has at most two children, and the value of each node's left child is less than the value of the node, and the value of each node's right child is greater than the value of the node.

### Binary Tree - Height and Depth

```txt
    7   ---- level 0  --- depth 0
   / \
  4   9 ---- level 1  --- depth 1
 / \   \
2   5   11 - level 2  --- depth 2
   /
  1  ------- level 3  --- depth 3

max depth = height = 3
```

1. **Height of a node**: the number of edges in the longest path from the root to any leaf.
2. **Height of a tree**: the number of edges in the longest path from the root to any leaf.
3. **Depth of a node**: the number of edges from the node to the root.
4. **Max depth** = **Height** of the tree
5. The height of null node is -1 to make the math correct
6. The height of a node = max(height of left subtree, height of right subtree) + 1

### Hight balanced Binary Tree

- if a binary tree is skewed, it is computationally inefficient to perform operations on it.

**Hight Balanced Binary Tree**is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

|# of left child - # of right child | = 1

```txt

    0                   2
   / \                 / \
  2   1               2   0
 / \   \       vs    / \
0   1   0 -1        0   1
   /                     \
  0  -1                -1  0

```

### Height of a Binary Tree

if a binary tree has n nodes, then it height is inbetween floor(log(n)) and n-1

In the **balanced** binary tree, the height is log(n).

$$log(N + 1) <= H + 1$$
$$\lceil(log(N + 1))\rceil - 1<= H$$
$$\lceil(log(N + 1))\rceil = \lfloor(log(n))\rfloor + 1$$
$$\lfloor(log(n))\rfloor = H$$

---

```txt

     7    -> 1
   /   \
  4     9  -> 2
 / \   / \
2   5 11  12 -> 4
            \
             13 -> max 8

1 + 2 + 4 + ... + 2^H -> geometric progression
```

**Sum of geometric progression** (up to n times):
$$a + ar + ar^2 + ... + ar^H = \frac{a(r^H + 1) - 1}{r - 1}$$

$$1 + 2 + 4 + ... + 2^H = \frac{2^H - 1}{1 - r} = 2^{H + 1} - 1$$

$$N <= 2^{H + 1} - 1$$

$$log(N + 1) <= H + 1$$

$$log(N + 1) - 1 <= H$$

$$\lceil(log(N + 1))\rceil - 1 = H$$

---

$$m = \lfloor(log(n))\rfloor$$

$$m <= log(n) < m + 1$$

$$2^m <= n <= 2^{m + 1}$$

$$2^m < n + 1 <= 2^{m + 1}$$

$$m < log(n + 1) <= m + 1$$

$$\lceil(log(n + 1))\rceil = m + 1$$

---

$$\lfloor(log(n))\rfloor + 1 - 1  = H$$

$$H = \lceil(log(n))\rceil$$

QED

### Binary Trees Terminology

1. **Perfect Binary Tree**: A binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

   - number of nodes in last level = 1 + all previous nodes
   - number of nodes in last level = 2 \* number of nodes in previous level

2. **Almost Complete Binary Tree**: not a perfect binary tree, **level by level**, **left to right**

example:

```txt

     o           o
   /   \       /   \
  o     o     o     o
 /           / \   /
o           o   o o

- not a perfect binary tree
- level by level
- left to right
```

3. **Complete Binary Tree**

   - perfect binary tree and almost perfect binary tree are complete binary tree
   - till 2nd last level completely filled
   - last level: from left to right
   - can have all the levels completely filled

4. **Full Tree**: each node has 0 children or exactly 2 children

```txt

     o           o
   /   \       /   \
  o     o     o     o   and so on...
             / \   / \
            o   o o   o
```

5. **Range of Leaves**: (leaves are nodes with no children)
   - complete binary tree: $\lfloor(N / 2)\rfloor$ to $N - 1$

```txt

- 0 indexed complete binary tree

          o
        /   \
       o     o
      / \   / \
     o   o o   o

N = 7
range of leaves = floor(7 / 2)\ to 7 - 1 = 3 to 6

```

---

```txt

- 0 indexed complete binary tree

          o#0
        /   \
       o#1   o#2
      / \
     o#3 o#4

N = 5
range of leaves = floor(5 / 2)\ to 5 - 1 = 2 to 4

```

6. **Range of Internal Nodes**: 0 to $\lfloor(N / 2)\rfloor - 1$

### Binary Trees - Tree Traversal

- visiting every node once
- can do in different ways

```txt

      3  ---->
    /   \
   5     7   ----BFS--->
  / \     \
 4   6    11   ----->

Breadth First: 3, 5, 7, 4, 6, 11

Depth First:
  - multiple ways
```

### Binary Search Tree

- every node has at most two children
- sorted => to left of a node, values less than node, to right of a node, values greater than node

```txt

        54
      /    \
    50      65
   /  \       \
 30   53      70
```

1. **Insertion**:

   - T = O(log(n)), avg. O(n) worst
   - S = O(1) - Iterative solution
   - S = O(log(n)) - Recursive solution

2. **Searching**:

   - T = O(log(n)), best. O(n) worst
   - S = O(1) - Iterative solution
   - S = O(log(n)) - Recursive solution

3. **Deletion**:
   - T = O(log(n)), best. O(n) worst
   - S = O(1) - Iterative solution
   - S = O(log(n)) - Recursive solution

### Implementation

```ts
interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number): void {
    const newNode: TreeNode = { value, left: null, right: null };
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node: TreeNode, newNode: TreeNode): void {
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
  }
}
```

### Understanding BFS

```txt

      ->  20
        /    \
  ->  13  ->  40 ->
     / \       \
    10  13      43
   / \          /
  8   11       41

BFS = [20, 13, 40, 10, 13, 43, 8, 11, 41]

```

### Understanding DFS

```txt

          20
        /    \
      13     40
     / \       \
    10  13      43
   / \          /
  8   11       41

DFS:

- in-order: left, current, right: 8, 10, 11, 13, 13, 20,  40, 41, 43 - IN THE ASCENDING ORDER
- pre-order: current, left, right: 20, 13, 10, 8, 11, 13, 40, 43, 41
- post-order: left, right, current: 8, 11, 10, 13, 13, 41, 43, 40, 20 - IN THE DESCENDING ORDER

```

### List of Problems:

1. [Design a Binary Search Tree](01-implement-bst/question.md), [Solution](01-implement-bst/bst.ts)
2. [BFS, DFS](02-traverse-bfs-dfs/question.md), [Solution](02-traverse-bfs-dfs/bst.ts)
