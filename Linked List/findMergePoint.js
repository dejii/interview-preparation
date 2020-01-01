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

  insertAtBeginning(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;

    return this.head;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;

    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node.next !== null) {
      // while node
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
    }

    // if new node needs to be inserted at the front of the list ie before the head
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1);
    if (previous) {
      let newNode = new Node(data);
      newNode.next = previous.next;
      previous.next = newNode;

      return this.head;
    } else {
      throw new Error(`No previous node found at index ${index - 1}`);
    }
  }

  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }

  deleteLastNode() {
    if (!this.head) {
      return null;
    }
    // if only one node
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }
    previous.next = null;
    return this.head;
  }

  deleteAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous && !previous.next) {
      return;
    }
    previous.next = previous.next.next;
    return this.head;
  }

  deleteList() {
    this.head = null;
  }

  print() {
    if (!this.head) {
      console.log("Empty List");
    }
    let tail = this.head;
    while (tail !== null) {
      console.log(tail.data);
      tail = tail.next;
    }
  }
  /*
    https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
                  
    */
}

class findMergePoint {
  length(list) {
    let len = 0;
    let tail = list.head;
    while (tail !== null) {
      len++;
      tail = tail.next;
    }
    return len;
  }
  solution() {
    let listA = new LinkedList();
    let listB = new LinkedList();
    listA.insertAtBeginning(3);
    listA.insertAtBeginning(2);
    listA.insertAtBeginning(1);
    listA.insertAtEnd(29);
    listA.insertAtEnd(500);
    listA.insertAtEnd(600);

    listB.insertAtBeginning(6);
    listB.insertAtBeginning(5);
    listB.insertAtBeginning(4);
    listB.insertAtBeginning(3);
    listB.insertAtEnd(29);
    listB.insertAtEnd(500);
    listB.insertAtEnd(600);
    // listB.print();
    // console.log(this.length(listB));
    // console.log(this.bruteForce(listA, listB));
    // console.log(this.extraMemory(listA, listB));
    console.log(this.optimized(listA, listB));
  }

  bruteForce(A, B) {
    let m = this.length(A);
    let n = this.length(B);
    A = A.head;
    B = B.head;
    // return;
    let head2 = B;
    for (var i = 0; i < m; i++) {
      B = head2;
      for (var j = 0; j < n; j++) {
        console.log(A.data, B.data);
        if (A.data === B.data) {
          console.log(`Found ! -> ${A.data}`);
          return;
        }
        B = B.next;
      }
      A = A.next;
    }
  }

  extraMemory(A, B) {
    const m = this.length(A);
    const n = this.length(B);
    A = A.head;
    B = B.head;
    const set = new Set();
    for (var j = 0; j < n; j++) {
      set.add(B.data);
      B = B.next;
    }

    for (var i = 0; i < m; i++) {
      if (set.has(A.data)) {
        console.log(`Found it! -> ${A.data}`);
        return;
      }
      A = A.next;
    }
  }

  optimized(A, B) {
    let m = this.length(A);
    let n = this.length(B);
    if (n > m) {
      return this.optimized(B, A);
    }
    A = A.head;
    B = B.head;
    var diff = Math.abs(m - n);
    for (var i = 0; i < diff; i++) {
      A = A.next;
    }

    while (A && B) {
      if (A.data === B.data) {
        console.log(`Found it! -> ${A.data}`);
        return;
      }
      A = A.next;
      B = B.next;
    }
    return -1;
  }
}

let soln = new findMergePoint();
console.log(soln.solution());
