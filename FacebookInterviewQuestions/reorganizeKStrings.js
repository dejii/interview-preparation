/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
class PriorityQueue {
  constructor(compareFn) {
    this.heap = [];
    if (compareFn) {
      this.compareFn = compareFn;
    } else {
      // ascending order by default
      this.compareFn = (a, b) => a[1] - b[1]; //desc
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

/*
Given a non-empty string s and an integer k, rearrange the string such that the same characters are at least distance k from each other.

All input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string "".

Example 1:

Input: s = "aabbcc", k = 3
Output: "abcabc" 
Explanation: The same letters are at least distance 3 from each other.
Example 2:

Input: s = "aaabc", k = 3
Output: "" 
Explanation: It is not possible to rearrange the string.
Example 3:

Input: s = "aaadbbcc", k = 2
Output: "abacabcd"
Explanation: The same letters are at least distance 2 from each other.
*/
var rearrangeString = function(s, k) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (!map.has(ch)) {
      map.set(ch, 0);
    }
    map.set(ch, map.get(ch) + 1);
  }

  let pq = new PriorityQueue((a, b) => a[1] - b[1]); // max heap
  let queue = []; // will store the wait queue values
  for (let [ch, count] of map) {
    pq.add([ch, count]);
  }

  let result = [];
  while (!pq.isEmpty()) {
    let [ch, count] = pq.remove();
    result.push(ch);
    queue.push([ch, count - 1]);
    // console.log(queue);
    if (queue.length < k) {
      continue;
    }
    let front = queue.shift();
    if (front[1] > 0) {
      pq.add(front);
    }
  }
  //   console.log(pq.heap);
  console.log(queue);
  //   console.log(result);

  return result.length === s.length ? result.join("") : "";
};

console.log(rearrangeString("aaab", 3));
// console.log(rearrangeString("aabbcc", 3));

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
