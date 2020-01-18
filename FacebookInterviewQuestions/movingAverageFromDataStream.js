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
