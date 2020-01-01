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
  if (!head) {
    console.log("Empty Linked List");
    return;
  }
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
function reverseBetween(A, B, C) {
  var head = A;
  var m = B;
  var n = C;
  if (head == null) return null;
  var dummy = { next: head }; // create a dummy node to mark the head of this list
  var pre = dummy; // make a pointer pre as a marker for the node before reversing
  for (var i = 0; i < m - 1; i++) pre = pre.next;

  var start = pre.next; // a pointer to the beginning of a sub-list that will be reversed
  var then = start.next; // a pointer to a node that will be reversed

  // 1 - 2 -3 - 4 - 5 ; m=2; n =4 ---> pre = 1, start = 2, then = 3
  // dummy-> 1 -> 2 -> 3 -> 4 -> 5

  for (var i = 0; i < n - m; i++) {
    start.next = then.next;
    then.next = pre.next;
    pre.next = then;
    then = start.next;
  }

  // first reversing : dummy->1 - 3 - 2 - 4 - 5; pre = 1, start = 2, then = 4
  // second reversing: dummy->1 - 4 - 3 - 2 - 5; pre = 1, start = 2, then = 5 (finish)

  return dummy.next;
}

function reverseBetweenBrute(A, B, C) {
  // 1 -> 2 -> 3 -> 4 -> 5
  var dummy = { next: A };
  var prev = dummy;
  for (let i = 1; i < B; i++) {
    // O(B - 1)
    prev = prev.next;
  }
  var start = prev.next;
  var prevNode = null;
  var currentNode = start;
  var diff = C - B + 1; // +1 because of null
  var i = 0;
  while (currentNode) {
    //  O (C - B + 1)
    if (i === diff) break;
    var next = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = next;
    i++;
  }
  prev.next = prevNode;
  var tail = prevNode;
  while (tail.next) {
    // O (C - B)
    tail = tail.next;
  }
  tail.next = currentNode;
  return dummy.next;
}

const list = new LinkedList();
list.append(3);
list.append(4);
list.append(5);
list.prepend(2);
list.prepend(1);
printLinkedList(list.head);
console.log("-----------------------");
let head = reverseBetween(list.head, 2, 4);
// head = reverseBetweenBrute(list.head, 2, 4);
printLinkedList(head);
