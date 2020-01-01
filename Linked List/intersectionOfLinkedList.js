function ListNode(val) {
  this.val = val;
  this.next = null;
}

var length = function(A) {
  var count = 0;
  while (A) {
    count++;
    A = A.next;
  }
  return count;
};
var a = new ListNode(1, c);
var b = new ListNode(3, c);
var c = new ListNode(2);
var getIntersectionNode = function(headA, headB) {
  var m = length(headA);
  var n = length(headB);
  if (n > m) {
    return getIntersectionNode(headB, headA);
  }

  var diff = Math.abs(m - n);
  for (var i = 0; i < diff; i++) {
    headA = headA.next;
  }
  while (headA && headB) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null;
};
console.log(getIntersectionNode(a, c));
