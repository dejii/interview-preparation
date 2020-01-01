function addTwoListsExtraMemory(l1, l2) {
  let result = new ListNode(0);
  let head = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    head.next = new ListNode(sum % 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    head = head.next;
  }

  return result.next;
}

var length = function(current) {
  var count = 0;
  while (current !== null) {
    current = current.next;
    count++;
  }
  return count;
};

function addTwoLists(A, B) {
  var m = length(A);
  var n = length(B);
  if (n > m) {
    return addTwoNumbers(B, A);
  }
  var carry = 0;
  var head = A;
  var prev = null;

  while (A && B) {
    var a = A.data;
    var b = B.data;
    var sum = a + b + carry;
    A.data = sum % 10;
    carry = Math.floor(sum / 10);
    prev = A;
    A = A.next;
    B = B.next;
  }
  if (carry) {
    if (!A) {
      prev.next = new Node(carry);
    } else {
      while (carry && A.next) {
        var sum = A.data + carry;
        carry = Math.floor(sum / 10);
        A.data = sum % 10;
        prev = A;
        A = A.next;
      }
      if (carry && A) {
        var sum = A.data + carry;
        carry = Math.floor(sum / 10);
        A.data = sum % 10;
        prev = A;
        A = A.next;
      }
      if (carry) {
        prev.next = new Node(carry);
      }
    }
  }

  return head;
}
