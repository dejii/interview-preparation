function findDuplicateInArray(A) {
  if (A.length < 2) {
    return -1;
  }
  var store = {};
  for (var i = 0; i < A.length; i++) {
    if (store.hasOwnProperty(A[i])) {
      return A[i];
    } else {
      store[A[i]] = i;
    }
  }
  return -1;
}

var a = [3, 4, 1, 4, 1];
console.log(findDuplicateInArray(a));
// console.log(a.reduce((acc, val) => acc ^ val));
