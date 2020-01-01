function removeDuplicates(A) {
  var prev = A;
  while (prev) {
    var next = prev.next;
    while (next !== null && prev.data == next.data) {
      next = next.next;
    }
    prev.next = next;
    prev = next;
  }

  return A;
}
