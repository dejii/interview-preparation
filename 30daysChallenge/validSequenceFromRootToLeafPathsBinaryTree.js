/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
function helper(root, arr, idx) {
    if (root === null || idx >= arr.length) return false;
    if (root.val !== arr[idx]) return false;
    if (root.left === null && root.right === null && idx === arr.length - 1) return true;
    return helper(root.left, arr, idx + 1) || helper(root.right, arr, idx + 1);
}
var isValidSequence = function (root, arr) {
    return helper(root, arr, 0);
};