/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.items = [];
  this.resize = function(val) {
    if (this.items.length >= this.size) {
      this.items.shift();
    }
    this.items.push(val);
  };
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.resize(val);
  return (
    this.items.reduce((total, item) => total + item, 0) / this.items.length
  );
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.windowSum = 0;
  this.items = [];
  this.count = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.count++;
  this.items.push(val);
  let temp = this.count > this.size ? this.items.shift() : 0;
  this.windowSum = this.windowSum - temp + val;
  return this.windowSum / Math.min(this.size, this.count);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
