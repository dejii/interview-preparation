/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function convert(nums, left, right) {
  if (left > right) {
    return null;
  }
  let mid = left + Math.floor((right - left) / 2);
  let current = new TreeNode(nums[mid]);
  current.left = convert(nums, left, mid - 1);
  current.right = convert(nums, mid + 1, right);
  return current;
}
var sortedArrayToBST = function(nums) {
  if (!nums || nums.length === 0) {
    return null;
  }

  return convert(nums, 0, nums.length - 1);
};

/**
 * public class Solution {
public TreeNode sortedListToBST(ListNode head) {
    if(head==null) return null;
    return toBST(head,null);
}
public TreeNode toBST(ListNode head, ListNode tail){
    ListNode slow = head;
    ListNode fast = head;
    if(head==tail) return null;
    
    while(fast!=tail&&fast.next!=tail){
        fast = fast.next.next;
        slow = slow.next;
    }
    TreeNode thead = new TreeNode(slow.val);
    thead.left = toBST(head,slow);
    thead.right = toBST(slow.next,tail);
    return thead;
}

  public TreeNode sortedListToBST(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return new TreeNode(head.val);
        ListNode slow = head, pre = null, fast = head;
        while (fast != null && fast.next != null) {
            pre = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        pre.next = null; //cut left sub list here
        TreeNode n = new TreeNode(slow.val);
        n.left = sortedListToBST(head);
        n.right = sortedListToBST(slow.next);
        return n;
    }

    The time complexity of the solution is O(n logn) since you have to traverse the sub-list in each recursive call.
 */
