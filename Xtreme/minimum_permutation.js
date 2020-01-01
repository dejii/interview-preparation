function printLinkedList(head) {
  let str = "";
  while (head.next) {
    str += head.data + " ";
    head = head.next;
  }
  str += head.data;
  return str;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

let node = new Node(5);
node.next = new Node(80);
node.next.next = new Node(22);

const B = [6, 4, 20, 11, 100, 1].sort((a, b) => a - b);
function insert(head, n) {
  let current = head;
  if (n < head.data) {
    const temp = new Node(n);
    temp.next = head;
    node = temp;
    return temp;
  }
  while (current.next) {
    let next = current.next;
    if (n < next.data) {
      const temp = new Node(n);
      temp.next = next;
      current.next = temp;
      return temp;
    } else {
      prev = current;
      current = next;
    }
  }
  const temp = new Node(n);
  current.next = temp;
  return temp;
}

let newHead = node;
for (const b of B) {
  //   console.log(b);
  newHead = insert(newHead, b);
  //   break;
}

// // console.log(printLinkedList(node));
// insert(node, 11);
console.log(printLinkedList(node));
