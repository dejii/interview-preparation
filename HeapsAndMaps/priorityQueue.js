class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    if (compareFn) {
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

// const queue = new PriorityQueue((a, b) => {
//   //   console.log(`${a} ${b}`);
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
const queue = new PriorityQueue();
let arr = [4, 3, 7, 1, 5, 0];
for (const n of arr) {
  queue.add(n);
}
console.log(queue.heap);
while (queue.size() > 0) {
  console.log(queue.remove());
}

/*
We have k sorted Linked Lists, k is 3 in this case
    1 -> 3 -> 5
    1 -> 2 -> 4
    4 -> 5 -> 6

    Obviously our merged result would be
    1->1->2->3->4->4->5->5->6

    say we have a function mergeTwoLists(l1,l2)
        if we merge the first two lists giving us
            1->1->2->3->4->5
        then merging the result with our last list giving us
            1->1->2->3->4->4->5->5->6


    WHAT IS THE TIME COMPLEXITY
    
    

*/
