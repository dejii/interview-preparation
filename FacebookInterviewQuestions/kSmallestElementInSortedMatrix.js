/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MatrixNode {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    this.compareFn = compareFn;
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
var kthSmallest = function(matrix, k) {
  let n = matrix.length;
  // min heap
  let pq = new PriorityQueue((n1, n2) => {
    if (matrix[n1.row][n1.col] < matrix[n2.row][n2.col]) {
      return 1;
    } else if (matrix[n1.row][n1.col] > matrix[n2.row][n2.col]) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < n && i < k; i++) {
    pq.add(new MatrixNode(i, 0));
  }
  let result = 0;
  let count = 0;
  while (!pq.isEmpty()) {
    let node = pq.remove();
    result = matrix[node.row][node.col];
    count++;
    if (count === k) {
      break;
    }

    node.col++;
    if (node.col < n) {
      pq.add(node);
    }
  }
  // console.log(pq.heap)

  return result;
};
