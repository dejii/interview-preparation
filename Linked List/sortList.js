function Node(data) {
  this.data = data;
  this.next = null;
}
function sortList(A) {
  var p = A;
  var list = [];

  while (p !== null) {
    list.push(p.data);
    p = p.next;
  }
  var dummyNode = new Node(0);
  var temp = dummyNode;
  list = list.sort(function(x, y) {
    return x - y;
  });
  for (var i = 0; i < list.length; i++) {
    temp.next = new Node(list[i]);
    temp = temp.next;
  }
  return dummyNode.next;
}
