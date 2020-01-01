function colourful(A) {
  A = A + "";
  var store = {};

  var count = 1;
  var i = 0;
  var n = A.length;
  var mul = 1;
  for (var k = 0; k < A.length; k++) {
    mul = mul * parseInt(A[k]);
  }
  store[mul] = mul;
  while (count < n) {
    for (var j = 0; j < n - count + 1; j++) {
      var sub = A.substring(j, j + count);
      var mul = 1;
      for (var k = 0; k < sub.length; k++) {
        mul = mul * parseInt(sub[k]);
      }

      console.log(sub);
      if (store.hasOwnProperty(mul)) {
        return 0;
      } else {
        store[mul] = mul;
      }
    }
    count++;
  }

  return 1;
}

function colourful2(A) {
  A = A + "";
  var n = A.length;
  var store = {};
  for (var i = 0; i < n; i++) {
    var mul = 1;
    for (var j = i; j < n; j++) {
      mul = mul * parseInt(A[j]);
      if (store.hasOwnProperty(mul)) {
        return 0;
      } else {
        store[mul] = 1;
      }
    }
  }
  return 1;
}

console.log(colourful(3245));
