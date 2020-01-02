var countAndSay = function(n) {
  var prev = "1";
  var i = 1;
  while (i < n) {
    var res = "";
    for (var j = 0; j < prev.length; j++) {
      var count = 1;
      while (j + 1 < prev.length && prev[j] === prev[j + 1]) {
        count++;
        j++;
      }
      res += count + prev[j];
    }
    prev = res;
    i++;
  }
  return prev;
};
