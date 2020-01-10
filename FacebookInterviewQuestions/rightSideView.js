/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
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

var rightSideView = function(root) {
  let result = [];
  if (root === null) {
    return result;
  }
  let queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let size = queue.size();
    for (let i = 0; i < size; i++) {
      let node = queue.dequeue();
      if (i === size - 1) {
        result.push(node.val);
      }
      if (node.left !== null) {
        queue.enqueue(node.left);
      }
      if (node.right !== null) {
        queue.enqueue(node.right);
      }
    }
  }
  return result;
};
