function intersect(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      return true;
    }
  }
  return false;
}

function equal(A) {
  var store = {};
  for (var i = 0; i < A.length - 1; i++) {
    for (var j = i + 1; j < A.length; j++) {
      var sum = A[i] + A[j];
      if (!store.hasOwnProperty(sum)) {
        store[sum] = [i, j];
      } else {
        if (!intersect(store[sum], [i, j])) {
          store[sum].push(i);
          store[sum].push(j);
        }
      }
    }
  }
  console.log(store);
  var candidates = [];
  for (var key in store) {
    if (store[key].length >= 4) {
      candidates.push(store[key].slice(0, 4));
    }
  }
  candidates.sort(function(x, y) {
    var diff = x[0] - y[0];
    var i = 0;
    while (diff === 0 && i < 4) {
      i++;
      diff = x[i] - y[i];
    }
    return diff;

    var diff = x[0] - y[0];
    if (diff === 0) {
      diff = x[1] - y[1];
      if (diff === 0) {
        diff = x[2] - y[2];
        if (diff === 0) {
          return x[3] - y[3];
        } else {
          return diff;
        }
      } else {
        return diff;
      }
    } else {
      return diff;
    }
  });
  //   console.log(candidates);
  if (candidates.length > 0) {
    return candidates[0];
  }
  return [];
}

var a = [3, 4, 7, 1, 2, 9, 8];
var a = [1, 5, 2, 4, 2, 0, 2, 5, 1, 0, 5, 0];
var a = [5, 5, 4, 4, 0, 0, 1, 4, 2, 1, 3, 4];
// var a = [0, 0, 1, 0, 2, 1];
console.log(equal(a));

function bruteForce(A) {
  var candidates = [];
  for (var i = 0; i < A.length - 3; i++) {
    for (var j = i + 1; j < A.length - 2; j++) {
      var ab = A[i] + A[j];
      for (var k = j + 1; k < A.length - 1; k++) {
        for (var l = k + 1; l < A.length; l++) {
          var cd = A[k] + A[l];
          if (ab === cd) {
            candidates.push([i, j, k, l]);
          }
          //   console.log([A[i], A[j], A[k], A[l]]);
        }
      }
    }
  }
  console.log(candidates);
  return [];
}

// console.log(bruteForce(a));
