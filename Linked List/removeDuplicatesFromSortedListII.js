function removeDuplicates(A) {
  var fakeHead = { next: A };
  var prev = fakeHead;
  var current = A;
  while (current) {
    while (current.next !== null && current.data === current.next.data) {
      current = current.next;
    }
    if (prev.next === current) {
      prev = prev.next;
    } else {
      prev.next = current.next;
    }
    current = current.next;
  }
  return fakeHead.next;
}
