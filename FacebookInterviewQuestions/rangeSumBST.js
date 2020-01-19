/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
class Queue {
  constructor() {
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  enqueue(data) {
    this.arr.push(data);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.arr.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.arr[0];
  }

  print() {
    let str = "";
    for (let i = 0; i < this.arr.length; i++) {
      str += this.arr[i] + " ";
    }
    console.log(str);
  }
}

var rangeSumBST = function(root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};

/**
 *     public int rangeSumBST(TreeNode root, int L, int R) {
        if (root == null) return 0; // base case.
        if (root.val < L) return rangeSumBST(root.right, L, R); // left branch excluded.
        if (root.val > R) return rangeSumBST(root.left, L, R); // right branch excluded.
        return root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R); // count in both children.
    }
 */
