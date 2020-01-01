class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function print(node) {
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

function length(node) {
  let count = 0;
  while (node !== null) {
    count++;
    node = node.next;
  }
  return count;
}

function sumLists(l1, l2, result) {
  result.next = new Node(0);
  result = result.next;
  if (l1.next === null) {
    const sum = (l1 ? l1.data : 0) + (l2 ? l2.data : 0);
    result.data = sum % 10;
    return Math.floor(sum / 10);
  }
  const carry = sumLists(l1.next, l2.next, result);
  const sum = (l1 ? l1.data : 0) + (l2 ? l2.data : 0) + carry;
  result.data = sum % 10;
  return Math.floor(sum / 10);
}

function add(node1, node2) {
  const m = length(node1);
  const n = length(node2);
  if (m > n) {
    const diff = m - n;
    for (let i = 0; i < diff; i++) {
      const temp = node2;
      const newNode = new Node(0);
      newNode.next = temp;
      node2 = newNode;
    }
  } else if (n > m) {
    const diff = n - m;
    for (let i = 0; i < diff; i++) {
      const temp = node1;
      const newNode = new Node(0);
      newNode.next = temp;
      node1 = newNode;
    }
  }
  const head = new Node(0);
  const result = head;
  const carry = sumLists(node1, node2, result);
  if (carry) {
    head.data = carry;
    print(head);
  } else {
    print(head.next);
  }
}

const n1 = new Node(1);
n1.next = new Node(2);
// n1.next.next = new Node(3);
// n1.next.next.next = new Node(4);

const n2 = new Node(4);
n2.next = new Node(5);
n2.next.next = new Node(6);

add(n1, n2);
