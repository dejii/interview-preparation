function toFindAllSubsets(A, result, subs, startIndex, B) {
  var temp = subs.slice();
  if (temp.length === B) {
    result.push(temp);
  }

  for (var i = startIndex; i < A.length; i++) {
    subs.push(A[i]);
    toFindAllSubsets(A, result, subs, i + 1, B);
    subs.pop();
  }
}
function combinations(A, B) {
  var result = [];
  //   if (!A || A.length === 0) {
  //     return [];
  //   }

  A = A.sort(function(x, y) {
    return x - y;
  });
  var subs = [];
  toFindAllSubsets(A, result, subs, 0, B);
  return result;
}

var a = [1, 2, 3, 4];
console.log(combinations(a, 2));
