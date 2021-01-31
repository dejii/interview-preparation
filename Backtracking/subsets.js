// https://www.youtube.com/watch?v=VdnvmfzA1pw

function toFindAllSubsets(A, result, subs, startIndex) {
  result.push(subs.slice());

  for (var i = startIndex; i < A.length; i++) {
    subs.push(A[i]);
    toFindAllSubsets(A, result, subs, i + 1);
    subs.pop();
  }
}
function subsets(A) {
  var result = [];
  //   if (!A || A.length === 0) {
  //     return [];
  //   }

  A = A.sort(function(x, y) {
    return x - y;
  });
  var subs = [];
  toFindAllSubsets(A, result, subs, 0);
  return result;
}
var a = [1, 2, 3];
console.log(subsets(a));