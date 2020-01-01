/**
 * Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  // x->1->2->3->4->5
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let first = dummyNode;
  let second = dummyNode;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  while (first.next !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;

  return dummyNode.next;
};
