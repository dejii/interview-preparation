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
    if (!this.head) {
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
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    return;
  }
}

function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

var length = function(head) {
  var count = 0;
  var current = head;
  while (current) {
    count++;
    current = current.next;
  }
  return count;
};
var rotateRight = function(A, B) {
  var n = length(A);
  if (n === 1) {
    return A;
  }
  var rot = B % n;
  if (rot === 0) {
    return A;
  }
  var diff = n - rot;
  var prevHead = A;
  var i = 0;
  while (i < n) {
    if (i === diff) {
      break;
    }
    i++;
    A = A.next;
  }
  var newHead = A;
  var temp = prevHead;
  while (temp && temp.next !== newHead) {
    temp = temp.next;
  }
  temp.next = null;
  while (A && A.next !== null) {
    A = A.next;
  }
  A.next = prevHead;
  return newHead;
};

const list = new LinkedList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(2);
list.prepend(1);
const head = rotateRight(list.head, 2);
printLinkedList(head);
