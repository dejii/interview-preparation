var reverse = function(begin, end) {
  var current = begin.next;
  var prev = begin;
  var next = null;
  var first = current;
  while (current !== end) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  begin.next = prev;
  first.next = current;
  return first;
};
var reverseKGroup = function(head, k) {
  var A = head;
  var B = k;
  if (A === null || A.next === null || B === 1) {
    return A;
  }
  var dummyHead = new Node(0);
  dummyHead.next = A;
  var begin = dummyHead;
  var i = 0;
  while (A !== null) {
    i++;
    if (i % B === 0) {
      begin = reverse(begin, A.next);
      A = begin.next;
    } else {
      A = A.next;
    }
  }
  return dummyHead.next;
};
function Node(data) {
  this.data = data;
  this.next = null;
}
