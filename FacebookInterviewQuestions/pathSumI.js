/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasSum(node, current, target) {
  if (node === null) return false;
  current += node.val;
  if (node.left === null && node.right === null && current === target) {
    return true;
  }

  return (
    hasSum(node.left, current, target) || hasSum(node.right, current, target)
  );
}
var hasPathSum = function(root, sum) {
  if (root === null) return false;

  return hasSum(root, 0, sum);
};

// var findSum = function(node, currentSum, target, result, currentNums) {
//     currentNums.push(node.val);
//     if (currentSum === target && node.left === null && node.right === null) {
//         result.push(currentNums);
//         return
//     }

//      if (node.left !== null) {
//         findSum(node.left, node.val + currentSum, target, result, currentNums.slice())
//     }

//     if (node.right !== null) {
//         findSum(node.right, node.val + currentSum, target, result, currentNums.slice())
//     }

// };

// var hasPathSum = function(root, sum) {
//     if(root === null) return false;

//     if(root.left === null && root.right === null && sum - root.val === 0) return true;

//         return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

// };
