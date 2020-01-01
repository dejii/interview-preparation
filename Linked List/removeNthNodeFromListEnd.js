var length = function(head) {
  var current = head;
  var count = 0;
  while (current !== null) {
    count++;
    current = current.next;
  }
  return count;
};
var removeNthFromEnd = function(A, B) {
  var n = this.length(A);
  // 24, 82
  if (B >= n) {
    if (!A || !A.next) {
      // if there's no node or there's just one node, we return null
      return null;
    }
    return A.next;
  }
  if (B === 1) {
    // remove last element
    if (!A.next) {
      return null;
    }
    var temp = A;
    var prev = null;
    while (temp.next !== null) {
      prev = temp;
      temp = temp.next;
    }
    prev.next = null;
    return A;
  }
  var diff = n - B;
  var i = 0;
  var prev = null;
  var current = A;
  while (i < n) {
    if (i === diff) {
      prev.next = current.next;
      current.next = null;
      return A;
    }
    prev = current;
    current = current.next;
    i++;
  }
  return A;
};
