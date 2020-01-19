/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serializeUtil(root, list) {
    if (root === null) {
      return "null";
    }
    list.push(root.val);
    list.push(",");
    list.push(root.children.length);
    list.push(",");
    for (let child of root.children) {
      this.serializeUtil(child, list);
    }
  }
  serialize = function(root) {
    let list = [];
    this.serializeUtil(root, list);
    return list.join("");
  };

  /**
   * @param {string} data
   * @return {Node}
   */
  // Decodes your encoded data to tree.
  deserializeUtil(queue) {
    let temp = queue.shift();
    if (temp === "null") return null;

    let childrenCount = queue.shift();
    let newNode = new Node(temp);
    newNode.children = [];

    for (let i = 0; i < childrenCount; i++) {
      newNode.children.push(this.deserializeUtil(queue));
    }
    return newNode;
  }
  deserialize = function(data) {
    let queue = data.split(",");
    return this.deserializeUtil(queue);
  };
}
// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
