/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    if (compareFn) {
      // console.log("compareFn");
      this.compareFn = compareFn;
    } else {
      // ascending order by default
      this.compareFn = (a, b) => b - a;
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.heap.length;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Empty heap");
    }
    return this.heap[0];
  }
  add(item) {
    this.heap.push(item);
    this.siftUp();
  }
  remove() {
    if (this.isEmpty()) {
      throw new Error("Empty heap");
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.siftDown();
    return item;
  }

  siftUp() {
    let index = this.size() - 1;
    while (
      this.hasParent(index) &&
      this.compareFn(this.heap[index], this.parent(index)) > 0
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  siftDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let swapIndex = this.getLeftChildIndex(index);

      // if right child exists and right child has a higher priority, swap it
      if (
        this.hasRightChild(index) &&
        this.compareFn(this.leftChild(index), this.rightChild(index)) < 0
      ) {
        swapIndex = this.getRightChildIndex(index);
      }

      // if current index has higher priority that swapIndex, heap property restored
      if (this.compareFn(this.heap[index], this.heap[swapIndex]) > 0) {
        break;
      } else {
        this.swap(index, swapIndex);
      }
      index = swapIndex;
    }
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size();
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size();
  }
  hasParent(index) {
    return index !== 0 && this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
}
var findKthLargest = function(nums, k) {
  let i = 0;
  queue = new PriorityQueue((a, b) => b - a);
  for (; i < k; i++) {
    queue.add(nums[i]);
  }

  for (; i < nums.length; i++) {
    let curr = queue.peek();
    let next = nums[i];
    if (curr < next) {
      queue.remove();
      queue.add(nums[i]);
    }
  }

  return queue.peek();
};