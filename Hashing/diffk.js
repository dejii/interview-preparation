function diffk(A, B) {
  var store = {};

  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
      if (i !== j) {
        var sum = A[i] - A[j];
        if (!store.hasOwnProperty(sum)) {
          store[sum] = [i, j];
        } else {
          store[sum].push(i);
          store[sum].push(j);
        }
      }
    }
  }
  console.log(store);

  if (store.hasOwnProperty(B)) {
    return 1;
  } else {
    return 0;
  }
}
var a = [1, 5, 4, 1, 2];
// console.log(diffk(a, 0));

function diffk2(A, B) {
  if (A.length < 2) return 0;
  var arr = [];
  for (var i = 0; i < A.length; i++) {
    arr.push([A[i], i]);
  }
  var arr = arr.sort(function(x, y) {
    return x[0] - y[0];
  });
  console.log(arr);
  var i = 0;
  var j = 1;
  while (j < A.length) {
    var diff = arr[j][0] - arr[i][0];
    if (diff === B) {
      return 1;
    } else if (diff > B) {
      i++;
      if (i === j) j++;
    } else {
      j++;
    }
  }
  return 0;
}

// diffk2Has
function diffkHashing(A, B) {
  var store = {};
  for (var i = 0; i < A.length; i++) {
    var comp1 = A[i] + B;
    var comp2 = A[i] - B;
    if (store.hasOwnProperty(comp1) || store.hasOwnProperty(comp2)) {
      return 1;
    }
    store[A[i]] = 1;
  }
  return 0;
}

var b = 31;
console.log(diffk2(a, b));
