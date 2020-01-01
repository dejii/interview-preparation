function Node(data) {
  this.data = data;
  this.next = null;
}

function insertionSort() {
  var list = [];
  var current = A;
  while (current !== null) {
    list.push(current.data);
    current = current.next;
  }
  list = list.sort(function(x, y) {
    return x - y;
  });
  var dummyNode = new Node(0);
  var p = dummyNode;
  for (var i = 0; i < list.length; i++) {
    p.next = new Node(list[i]);
    p = p.next;
  }
  return dummyNode.next;
}
