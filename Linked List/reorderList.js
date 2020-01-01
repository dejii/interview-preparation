function reorderListExtraMemory(A) {
  var list = []; // O(n) -> space
  var temp = A;
  while (temp !== null) {
    // O(n) -> time
    list.push(temp.data);
    temp = temp.next;
  }
  var n = list.length;
  var dummyNode = new Node(0);
  var current = dummyNode;
  for (var i = 0; i < Math.floor(n / 2); i++) {
    // O(n/2) ~ O(n) -> time
    current.next = new Node(list[i]);
    current = current.next;
    current.next = new Node(list[n - i - 1]);
    current = current.next;
  }
  if (n & 1) {
    // odd length
    var m = Math.floor(n / 2);
    current.next = new Node(list[m]);
  }
  return dummyNode.next;

  // space complexity -> O(n),
  // time complexity -> O(n + n/2) ~ O(n)
}

function reverseList(current) {
  var prev = null;
  while (current !== null) {
    var next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

function mergeList(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  var head = l1;
  var p = head;
  l1 = l1.next;
  var currentList = true; // used to alternate
  while (l1 !== null && l2 !== null) {
    if (!currentList) {
      p.next = l1;
      l1 = l1.next;
    } else {
      p.next = l2;
      l2 = l2.next;
    }
    p = p.next;
    currentList = !currentList;
  }
  if (l1) {
    p.next = l1;
  } else {
    p.next = l2;
  }
  return head;
}

function reorderList(A) {
  var slow = A;
  var fast = A;
  // 1 - 2 - 3 - 4 - 5
  var prev = null;
  while (fast && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    prev = slow;
    slow = slow.next;
  }

  // slow is not at start of other half
  prev.next = null;

  var reversedHalf = reverseList(slow);
  A = mergeList(A, reversedHalf);
  return A;
}

function printLinkedList(head) {
  if (!head) {
    console.log("Empty list");
    return;
  }
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}
function Node(data) {
  this.data = data;
  this.next = null;
}

const node = new Node();
node.next = new Node(1);
node.next.next = new Node(2);
node.next.next.next = new Node(3);
node.next.next.next.next = new Node(4);
node.next.next.next.next.next = new Node(5);
const ans = reorderList(node.next);
printLinkedList(ans);
