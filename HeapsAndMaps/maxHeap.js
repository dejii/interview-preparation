class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
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
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  siftDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let greaterChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        greaterChildIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] > this.heap[greaterChildIndex]) {
        // heap property restored
        break;
      } else {
        this.swap(index, greaterChildIndex);
      }
      index = greaterChildIndex;
    }
  }

  // Helper methods
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  hasParent(index) {
    return index !== 0 && this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size();
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size();
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
}

const maxHeap = new MaxHeap();
let arr = [4, 3, 7, 1, 5, 0];
for (const n of arr) {
  maxHeap.add(n);
}
console.log(maxHeap.heap);
while (maxHeap.size() > 0) {
  console.log(maxHeap.remove());
}
