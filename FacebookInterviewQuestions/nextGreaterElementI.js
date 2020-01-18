/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
class Stack {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  push(data) {
    return this.items.push(data);
  }
  pop() {
    if (this.isEmpty()) throw new Error("Empty Stack");
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) throw new Error("Empty Stack");
    let idx = this.items.length - 1;
    return this.items[idx];
  }
}
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map();
  let stack = new Stack();
  for (let num of nums2) {
    while (!stack.isEmpty() && stack.peek() < num) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
  }
  for (let i = 0; i < nums1.length; i++) {
    if (!map.has(nums1[i])) {
      nums1[i] = -1;
    } else {
      nums1[i] = map.get(nums1[i]);
    }
  }
  return nums1;
};
