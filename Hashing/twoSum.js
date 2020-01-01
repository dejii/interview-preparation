function twoSum(A, B) {
  var store = {};
  for (var i = 0; i < A.length; i++) {
    var comp = B - A[i];
    if (store.hasOwnProperty(A[i])) {
      return [store[A[i]] + 1, i + 1];
    } else {
      if (!store.hasOwnProperty(comp)) {
        store[comp] = i;
      }
    }
  }
  return [];
}
