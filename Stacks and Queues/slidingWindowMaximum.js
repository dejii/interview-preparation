function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function slidingMaximum(A, B) {
  var store = {};
  var ans = [];

  for (var i = 0; i < A.length - B + 1; i++) {
    var subArr = A.slice(i, i + B);
    var max = getMaxOfArray(subArr);
    // if (!store.hasOwnProperty(max)) {

    // }
    // store[max] = subArr;
    ans.push(max);
  }
  console.log(store);

  var keys = Object.keys(store).map(function(n) {
    return parseInt(n);
  });

  return ans;
}

var a = [1, 3, -1, -3, 5, 3, 6, 7];
// var a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var b = 3;
console.log(slidingMaximum(a, b));
