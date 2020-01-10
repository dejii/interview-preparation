/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
class Stack {
  constructor() {
    this.items = [];
  }

  append(data) {
    this.items.push(data);
  }
  isEmpty() {
    this.items.length === 0;
  }
  size() {
    return this.items.length;
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("Empty stack!");
    }
    return this.items[this.size() - 1];
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Empty stack!");
    }
    return this.items.pop();
  }
}
var BSTIterator = function(root) {
  this.stack = new Stack();
  this.pushAll(root);
};

BSTIterator.prototype.pushAll = function(node) {
  while (node !== null) {
    this.stack.append(node);
    node = node.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let tempNode = this.stack.pop();
  this.pushAll(tempNode.right);
  return tempNode.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.items.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
