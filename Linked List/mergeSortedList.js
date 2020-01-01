function merge(A, B) {
  if (!A) return B;
  if (!B) return A;

  var head = null;
  if (A.data <= B.data) {
    head = A;
    A = A.next;
  } else {
    head = B;
    B = B.next;
  }
  //  5 -> 8 -> 20
  //  4 -> 11 -> 15

  // 4->5->11
  // nextA = 8
  // nextB = 11
  var p = head;

  while (A && B) {
    if (A.data <= B.data) {
      p.next = A;
      A = A.next;
    } else {
      p.next = B;
      B = B.next;
    }
    p = p.next;
  }
  if (A) {
    p.next = A;
  } else {
    p.next = B;
  }

  return head;
}
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
const list1 = new LinkedList();
list.append(5);
list.append(8);
list.append(10);
// list.print();
list1.append(4);
list1.append(7);
list1.append(9);
list1.append(20);
// list1.print();
let ans = merge(list.head, list1.head);
while (ans) {
  console.log(ans.data);
  ans = ans.next;
}
// ans.print();
