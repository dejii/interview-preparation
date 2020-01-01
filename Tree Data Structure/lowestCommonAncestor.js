var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  var leftSearchResult = lowestCommonAncestor(root.left, p, q);
  var rightSearchResult = lowestCommonAncestor(root.right, p, q);

  if (leftSearchResult === null) {
    return rightSearchResult;
  }
  if (rightSearchResult === null) {
    return leftSearchResult;
  }

  return root;
};
