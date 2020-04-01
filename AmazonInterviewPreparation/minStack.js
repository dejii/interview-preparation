/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.s1.push(x);
  if (this.s2.length === 0 || x <= this.s2[this.s2.length - 1]) {
    this.s2.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.s1.pop() === this.getMin()) {
    this.s2.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.s1[this.s1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.s2[this.s2.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
