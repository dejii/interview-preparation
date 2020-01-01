var reverse = function(head) {
  let prev = null;
  let current = head;
  // null 1 2
  // next -> 2, prev = 1, current -> 2
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
var isPalindrome = function(head) {
  // with no extra memory
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  } // 1 1 2 1 | 1,2 2,null
  // when the length is odd 1->1->2->1->1
  if (fast !== null) {
    slow = slow.next;
  }
  // reverse the right half, slow is currently at the mid of the list
  slow = reverse(slow); // beginning of the list from the right moving backwards
  fast = head; // beginning of the list from left moving forward
  while (slow !== null) {
    if (slow.data !== fast.data) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;

  //     let store = [];
  //     while (head !== null) {
  //         store.push(head.val);
  //         head = head.next;
  //     }
  //     const n = store.length;
  //     for (let i=0; i < Math.floor(n / 2); i++) {
  //         if (store[i] !== store[n - i - 1]) {
  //             return false;
  //         }
  //     }

  //     return true;
};
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return;
  }

  prepend(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
  print() {
    if (this.head === null) {
      console.log("Empty List!");
    }
    let tail = this.head;
    while (tail !== null) {
      console.log(tail.data);
      tail = tail.next;
    }
    return;
  }
}

const list = new LinkedList();
list.append(5);
list.append(8);
list.append(7);
list.append(8);
list.append(5);
// list.print();
console.log(isPalindrome(list.head));
