var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  while (current.next !== null && current.next.next !== null) {
    let first = current.next;
    let second = current.next.next;
    first.next = second.next;
    current.next = second;
    current.next.next = first;
    current = current.next.next;
  }
  return dummy.next;
};
// 0 - 1 - 2 - 3
// f-1, s-2
//1-3
//0-2
//2-1
// 2
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function helper(head) {
  if (head.next === null || head.next.next === null) {
    return;
  }
  let first = head.next;
  let second = head.next.next;
  first.next = second.next;
  head.next = second;
  head.next.next = first;
  head = head.next.next;
  helper(head)
}

var swapPairsRecursively = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;
  helper(current);
  return dummy.next;
}