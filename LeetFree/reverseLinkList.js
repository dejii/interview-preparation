/*
	RECUSIVELY
    
    Omo just write out the recursion yourself
    to understand this
    1->2->3->4->5
    Time - O(n)
    Space - O(n) - Recursive stack
*/

var reverseList = function(head) {
  if (!head || !head.next) return head;

  const p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};

/*
	ITERATIVE
    Pretty easy to follow
    We're just swaping as we progress
	Time - O(n)
    Space - O(1)
*/
var reverseList = function(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};
