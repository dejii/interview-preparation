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

let list = new LinkedList();
list.insertAtBeginning(4);
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtEnd(29);
list.insertAt(22, 1);
list.insertAt(33, 2);
list.print();
