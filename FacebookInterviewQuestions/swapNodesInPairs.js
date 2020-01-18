var swapPairs = function(head) {
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
