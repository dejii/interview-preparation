function toFindAllSubsets(A, result, subs, startIndex, B, sum) {
  var temp = subs.slice();
  //   console.log(sum);
  //   console.log(temp);
  if (sum === B) {
    result.push(temp);
    return;
  }
  if (i === A.length || sum > B) {
    return;
  }

  for (var i = startIndex; i < A.length; i++) {
    subs.push(A[i]);
    toFindAllSubsets(A, result, subs, i, B, sum + A[i]);
    subs.pop();
  }
}
function combinationSum(A, B) {
  var result = [];

  A = A.sort(function(x, y) {
    return x - y;
  });
  var subs = [];
  toFindAllSubsets(A, result, subs, 0, B, 0);
  return result;
}

var a = [2, 3, 6, 7];
console.log(combinationSum(a, 7));
