class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  enqueue(data) {
    return this.items.push(data);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Empty Queue");
    }
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
}

function verticalOrderTraversal(root) {
  if (root === null) {
    return [];
  }
  let map = new Map();
  let queue = new Queue();
  queue.enqueue(root);
  root.dist = 0;
  map.set(root.dist, [root.val]);
  while (!queue.isEmpty()) {
    let current = queue.dequeue();
    if (current.left !== null) {
      current.left.dist = current.dist - 1;
      if (map.has(current.left.dist)) {
        let arr = map.get(current.left.dist);
        arr.push(current.left.val);
        map.set(current.left.dist, arr);
      } else {
        map.set(current.left.dist, [current.left.val]);
      }
      queue.enqueue(current.left);
    }

    if (current.right !== null) {
      current.right.dist = current.dist + 1;
      if (map.has(current.right.dist)) {
        let arr = map.get(current.right.dist);
        arr.push(current.right.val);
        map.set(current.right.dist, arr);
      } else {
        map.set(current.right.dist, [current.right.val]);
      }
      queue.enqueue(current.right);
    }
  }
  //   console.log(map);
  let keys = Array.from(map.keys()).sort((a, b) => a - b);
  let res = [];
  for (let key of keys) {
    res.push(map.get(key));
  }
  return res;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node = new Node(3);
node.left = new Node(9);
node.right = new Node(20);
node.right.left = new Node(15);
node.right.right = new Node(7);

console.log(verticalOrderTraversal(node));

/**
 * Class Solution {
public:
    vector<vector<int>> verticalOrder(TreeNode* root) {
        vector<vector<int>> ret;
        if (root == nullptr) {
            return ret;
        }

        ret.resize(1);
        int l = 0, r = 0;

        queue<pair<TreeNode*, int>> que;//node, col
        que.push(pair<TreeNode*, int>(root, 0));
        while(!que.empty()){
            TreeNode *node = que.front().first;
            int col = que.front().second;
            que.pop();
            if(l<=col && col<=r){
                int i = col-l;
                ret[i].push_back(node->val);
            }else if(col<l){
                l--;
                ret.insert(ret.begin(), vector<int>());
                ret.front().push_back(node->val);
            }else{
                r++;
                ret.insert(ret.end(), vector<int>());
                ret.back().push_back(node->val);
            }
            if(node->left) que.push(pair<TreeNode*, int>(node->left, col-1));
            if(node->right) que.push(pair<TreeNode*, int>(node->right, col+1));
        }
        return ret;
    }
};
 */
