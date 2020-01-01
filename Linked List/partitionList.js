function Node(data) {
  this.data = data;
  this.next = null;
}
function partitionList(A, B) {
  var smallerHead = new Node(0);
  var greaterHead = new Node(0); //dummy heads of the 1st and 2nd queues
  var smallerLast = smallerHead;
  var greaterLast = greaterHead; //current tails of the two queues;
  while (A != null) {
    if (A.data < B) {
      smallerLast.next = A;
      smallerLast = smallerLast.next;
    } else {
      greaterLast.next = A;
      greaterLast = greaterLast.next;
    }
    A = A.next;
  }
  greaterLast.next = null;
  smallerLast.next = greaterHead.next; //Skipping dummy head of greater and linking
  return smallerHead.next; //Skipping dummy head of smaller and returning next
}
