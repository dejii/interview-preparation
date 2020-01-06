function reverse(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function print(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

function isPalindrome(head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    prev = slow;
    slow = slow.next;
  }
  prev.next = null;
  slow = reverse(slow);
  fast = head;
  while (slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
  // 1 -> 2 -> 3 -> 4 -> 5
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(2);
node.next.next.next.next = new Node(1);

console.log(isPalindrome(node));
