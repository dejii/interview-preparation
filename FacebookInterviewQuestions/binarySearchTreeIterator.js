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

  top() {
    if (this.isEmpty()) {
      throw new Error("Empty stack!");
    }
    return this.items[0];
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
class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}
let root = new Node(7);
root.left = new Node(3);
root.right = new Node(15);
root.right.left = new Node(9);
root.right.right = new Node(20);
var obj = new BSTIterator(root);

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.stack);
