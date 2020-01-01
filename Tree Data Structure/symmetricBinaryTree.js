var symmetric = function(A, B) {
  if (A === null && B === null) return true;
  if ((A !== null && B === null) || (A === null && B !== null)) return false;

  return (
    A.val === B.val && symmetric(A.left, B.right) && symmetric(A.right, B.left)
  );
};
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  return symmetric(root.left, root.right);
};
