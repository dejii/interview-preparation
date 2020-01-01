function countAndSay(A) {
  ans = "1";
  i = 1;
  while (i < A) {
    B = "" + ans;
    // console.log(B)
    var result = "";
    for (var j = 0; j < B.length; j++) {
      var count = 1;
      while (B[j + 1] && B[j] === B[j + 1]) {
        count++;
        j = j + 1;
      }
      result += "" + count + B[j];
    }

    ans = result;
    i++;
  }
  return ans;
}
a = 10;
console.log(countAndSay(a));
