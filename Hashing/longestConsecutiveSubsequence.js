function longestSubsequence(A) {
  var store = {};
  for (var i = 0; i < A.length; i++) {
    store[A[i]] = A[i];
  }
  var ans = 0;
  for (var i = 0; i < A.length; i++) {
    var prev = A[i] - 1;
    if (!store.hasOwnProperty(prev)) {
      var j = A[i];

      while (store.hasOwnProperty(j)) {
        j++;
      }

      ans = Math.max(ans, j - A[i]);
    }
  }
  return ans;
}
var a = [100, 4, 200, 1, 3, 2];
console.log(longestSubsequence(a));
