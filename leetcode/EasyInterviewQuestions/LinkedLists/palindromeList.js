/**
 * Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var reverse = function(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
var isPalindrome = function(head) {
  // with no extra memory
  let slow = head;
  let fast = head;
  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 1->2->3->4->5
  // -> 2, 3
  // -> 3, 5
  // -> 4

  // 1->2->3->4
  // -> 2, 3
  // -> 3, null
  // odd length
  if (fast !== null) {
    slow = slow.next;
  }
  slow = reverse(slow);
  fast = head;
  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;

  //     let store = [];
  //     while (head !== null) {
  //         store.push(head.val);
  //         head = head.next;
  //     }
  //     const n = store.length;
  //     for (let i=0; i < Math.floor(n / 2); i++) {
  //         if (store[i] !== store[n - i - 1]) {
  //             return false;
  //         }
  //     }

  //     return true;
};
