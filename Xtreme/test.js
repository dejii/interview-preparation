function Node(data) {
  this.data = data;
  this.next = null;
}
function printLinkedList2(head) {
  while (head) {
    console.log(head.data);
    head = head.next;
  }
}

function printLinkedList(head) {
  let str = "";
  while (head.next) {
    str += head.data + " ";
    head = head.next;
  }
  str += head.data;
  return str;
}

A = ["3", "1", "2"];
let dummyNode = new Node(0);
let p = dummyNode;
for (let s of A) {
  p.next = new Node(s);
  p = p.next;
}
let node = dummyNode.next;
// console.log(printLinkedList(node));
printLinkedList2(node);
