function fourSum(A, B) {
  var store = {};
  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < A.length; j++) {
      sum = A[i] + A[j];
      store[sum] = [i, j];
    }
  }

  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < A.length; j++) {
      var sum = A[i] + A[j];
      if (store.hasOwnProperty(B - sum)) {
        var arr = store[B - sum];
        var first = arr[0];
        var second = arr[1];
        if (i !== first && i !== second && j !== first && j !== second) {
          return [A[i], A[j], A[first], A[second]];
        }
      }
    }
  }
  return [];
}

function fourSumHashing(A, B) {
  var res = [];
  if (A.length < 4) {
    return [];
  }
  A = A.sort(function(x, y) {
    return x - y;
  });

  for (var i = 0; i < A.length; i++) {
    var target_3 = B - A[i];
    for (var j = i + 1; j < A.length; j++) {
      var target_2 = target_3 - A[j];

      var front = j + 1;
      var back = A.length - 1;

      while (front < back) {
        var two_sum = A[front] + A[back];
        if (two_sum < target_2) front++;
        else if (two_sum > target_2) back--;
        else {
          var arr = [A[i], A[j], A[front], A[back]];
          res.push(arr);
          while (front < back && A[front] === arr[2]) front++;
          while (front < back && A[back] === arr[3]) back--;
        }
      }
      while (j + 1 < A.length && A[j + 1] === A[j]) j++;
    }
    while (i + 1 < A.length && A[i + 1] === A[i]) i++;
  }
  return res;
}
var a = [
  9,
  -8,
  -10,
  -7,
  7,
  -8,
  2,
  -7,
  4,
  7,
  0,
  -3,
  -4,
  -5,
  -1,
  -4,
  5,
  8,
  1,
  9,
  -2,
  5,
  10,
  -5,
  -7,
  -1,
  -6,
  4,
  1,
  -5,
  3,
  8,
  -4,
  -10,
  -9,
  -3,
  10,
  0,
  7,
  9,
  -8,
  10,
  -9,
  7,
  8,
  0,
  6,
  -6,
  -7,
  6,
  -4,
  2,
  0,
  10,
  1,
  -2,
  5,
  -2
];

console.log(fourSumHashing(a, 0));
