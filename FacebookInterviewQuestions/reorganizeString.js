/**
 * @param {string} S
 * @return {string}
 */
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
      return null;
    }
    return this.heap[0];
  }
  add(item) {
    this.heap.push(item);
    this.siftUp();
  }
  remove() {
    if (this.isEmpty()) {
      return null;
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

/*
    It took me some time to understand why should we pick the char with maximum remaining count. The first thought was that it seems more "urgent". But that does not convince myself.

For those who are familiar with EDF (earilest deadline first) algorithm in scheduling, this problem is actually (I think) a different statement or a variation of the original scheduling problem.

Before filling in the first position, think about this: what is the deadline for the first occurance of every character? e.g. "aaabbc" and k=2.

In this case, deadline for "a" is index 1, that is, if we do not fill the first "a" at index 0 or index 1, we cannot finish the job. Deadline for b is 3 and deadline for c is 5. Thus we choose the one with most urgent deadline.

Therefore, the logic behind choosing maxiumum remaining count is that the char with larger remaining count has a more urgent deadline.

The second "a" will not "appear" until 2 steps after where we put the first "a". It will come with a different deadline than when there are 3 remaining "a"s.
    Using the greedy approach
    Similar to the task scheduling where you need to ensure that you dont process two tasks


*/
var reorganizeString = function(S) {
  let map = new Map();

  // build dictionary with counts
  for (let i = 0; i < S.length; i++) {
    if (map.has(S.charAt(i))) {
      map.set(S.charAt(i), map.get(S.charAt(i)) + 1);
    } else {
      map.set(S.charAt(i), 1);
    }
  }
  let queue = new PriorityQueue((a, b) => a[1] - b[1]); // descending order

  for (let [ch, count] of map) {
    // if the count of a single ch is greater than half the length of the whole string,
    // then it is not possible to reorganize strings such that no ch follows it self
    // if (count > (S.length + 1) / 2) return "";
    queue.add([ch, count]);
  }
  //   console.log(queue.heap);

  let result = [];
  while (!queue.isEmpty()) {
    let front = queue.remove();
    // if result is empty or the ch at front of the queue is not equal to the last character appended
    let n = result.length;
    if (n === 0 || front[0] !== result[n - 1]) {
      result.push(front[0]);
      if (--front[1] > 0) {
        queue.add(front);
      }
    } else {
      let second = queue.remove();
      // no more elements left in the queue
      if (second === null) {
        return "";
      }
      result.push(second[0]);
      if (--second[1] > 0) {
        queue.add(second);
      }
      queue.add(front);
    }
  }

  return result.join("");
};

console.log(reorganizeString("aaab"));
