function findSum(node, currentSum, target, result, currentNums) {
  currentNums.push(node.data);
  if (currentSum === target && node.left === null && node.right === null) {
    result.push(currentNums);
    return;
  }
  if (node.left !== null) {
    findSum(
      node.left,
      node.left.data + currentSum,
      target,
      result,
      currentNums.slice()
    );
  }
  if (node.right !== null) {
    findSum(
      node.right,
      node.right.data + currentSum,
      target,
      result,
      currentNums.slice()
    );
  }
}

function pathSum(A, B) {
  if (A === null) {
    return [];
  }
  var result = [];
  var currentSum = 0;
  currentSum += A.data;
  var currentNums = [];
  currentNums.push(A.data);
  if (A.left !== null) {
    findSum(A.left, A.left.data + currentSum, B, result, currentNums.slice());
  }
  if (A.right !== null) {
    findSum(A.right, A.right.data + currentSum, B, result, currentNums.slice());
  }
  return result;
}

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const node = new Node(5);
node.left = new Node(4);
node.left.left = new Node(11);
node.left.left.right = new Node(2);
node.left.left.left = new Node(7);

node.right = new Node(8);
node.right.left = new Node(13);
node.right.right = new Node(4);
node.right.right.left = new Node(5);
node.right.right.right = new Node(1);

console.log(pathSum(node, 22));
