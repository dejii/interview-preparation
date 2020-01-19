var isStrobogrammatic = function(num) {
  let map = new Map();
  map.set("6", "9");
  map.set("9", "6");
  map.set("0", "0");
  map.set("1", "1");
  map.set("8", "8");
  var l = 0,
    r = num.length - 1;
  while (l <= r) {
    if (!map.has(num.charAt(l))) return false;
    if (map.get(num.charAt(l)) != num.charAt(r)) return false;
    l++;
    r--;
  }
  return true;
};
