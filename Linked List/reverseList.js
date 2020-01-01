function Node(data, next) {
  this.data = data;
  this.next = this.next ? this.next : null;
}

function LinkedList() {
  this.head = null;
  var self = this;

  this.append = function(data) {
    let newNode = new Node(data);
    if (!self.head) {
      self.head = newNode;
      return;
    }

    let tail = self.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return self;
  };

  this.prepend = function(data) {
    let newNode = new Node(data);
    newNode.next = self.head;
    self.head = newNode;
    return self;
  };

  this.print = function() {
    var tail = self.head;
    while (tail) {
      console.log(tail.data);
      tail = tail.next;
    }
    return self;
  };

  this.reverse = function() {
    let current = self.head;
    let prev = null;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    self.head = prev;

    return self;
  };

  this.reverseRecursively = function(head) {
    if (!head.next) {
      self.head = head;
      return;
    }
    this.reverseRecursively(head.next);
    var next = head.next;
    next.next = head;
    head.next = null;

    return self;
  };
}

var list = new LinkedList();
list.append(2);
list.append(3);
list.append(4);
list.prepend(1);
list.reverseRecursively(list.head);
// console.log(list.head);
list.print();
