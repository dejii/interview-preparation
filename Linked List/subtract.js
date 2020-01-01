function printLinkedList(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
function length(head) {
  var count = 0;
  while (head) {
    head = head.next;
    count++;
  }
  return count;
}
function Node(data) {
  this.data = data;
  this.next = null;
}
function reverse(head) {
  var current = head;
  var prev = null;
  while (current !== null) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
function subtract(A) {
  var len = length(A);
  if (len & 1) {
    var slow = A;
    var fast = A;
    // 1, 2, 3, 4, 5, 6
    // 2, 3 |
    // 2,3 | 3, 5
    var head = A;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    //   if (fast) {
    //     slow = slow.next;
    //   }
    var stop = slow;
    slow = reverse(slow);
    //   console.log(slow);
    //   printLinkedList(slow);
    //   return;
    var temp = A;
    while (temp !== null && temp.next !== stop) {
      prev = temp;
      temp = temp.next;
    }
    temp.next = slow;
    // console.log(stop);
    printLinkedList(slow);
    return;

    while (A !== null && A !== stop && slow.next !== null) {
      A.data = slow.data - A.data;
      A = A.next;
      slow = slow.next;
    }

    var temp = head;
    var slow = temp;
    var fast = temp;
    var prev = temp;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    //   if (fast) {
    //     prev = slow;
    //     slow = slow.next;
    //   }
    slow = reverse(slow);
    prev.next = slow;

    return head;
  } else {
    var slow = A;
    var fast = A;
    // 1, 2, 3, 4, 5, 6
    // 2, 3 |
    // 2,3 | 3, 5
    var head = A;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    //   if (fast) {
    //     slow = slow.next;
    //   }
    var stop = slow;
    slow = reverse(slow);
    //   console.log(slow);
    //   printLinkedList(slow);
    //   return;
    var temp = A;
    while (temp !== null && temp.next !== stop) {
      prev = temp;
      temp = temp.next;
    }
    temp.next = slow;
    console.log(stop);
    //   printLinkedList(A);
    //   return;

    while (A !== null && A !== stop && slow !== null) {
      A.data = slow.data - A.data;
      A = A.next;
      slow = slow.next;
    }

    var temp = head;
    var slow = temp;
    var fast = temp;
    var prev = temp;
    while (fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
    }
    //   if (fast) {
    //     prev = slow;
    //     slow = slow.next;
    //   }
    slow = reverse(slow);
    prev.next = slow;

    return head;
  }
}
// 95 -> 59 -> 26 -> 16 -> 31 -> 39 -> 29 -> 8 -> 74 -> 14
// -> 41 -> 41 -> 64 -> 88 -> 34 -> 21 -> 67 -> 23 -> 17 -> 41 -> 3 -> 38 -> 4 -> 45 -> 93 -> 92 -> 99 -> 24
const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
node.next.next.next.next.next = new Node(6);
node.next.next.next.next.next.next = new Node(7);
printLinkedList(subtract(node));
