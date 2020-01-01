function detectCycle(A) {
  var slow = A;
  var fast = A;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  slow = A;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return fast;
}
function Node(data) {
  this.data = data;
  this.next = null;
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
const node = new Node(1);
node.next = new Node(2);
node.next.next = new Node(3);
node.next.next.next = new Node(4);
node.next.next.next.next = new Node(5);
node.next.next.next.next.next = new Node(6);
node.next.next.next.next.next.next = new Node(7);
node.next.next.next.next.next.next.next = node.next.next.next;
// node.next.next.next.next.next.next.next = null;

// printLinkedList(node);
const ans = detectCycle(node);
console.log(ans ? ans.data : null);
