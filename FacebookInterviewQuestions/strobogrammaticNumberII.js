var findStrobogrammatic_ = function(n) {
  return helper(n, n);
};

var helper_ = function(n, m) {
  if (n == 0) return [""]; // even number
  if (n == 1) return ["0", "1", "8"]; // odd number, 0, 1, 8 at mid

  var list = helper(n - 2, m);
  //   console.log(list);
  var res = [];

  for (var i = 0; i < list.length; i++) {
    var s = list[i];

    //Because number like "0690" is not valid, and using m to
    //record the origin n value so that we know when the recursion return to the first layer, and do not append 0 to it.
    if (n != m) res.push("0" + s + "0"); // skip in intvw

    res.push("1" + s + "1");
    res.push("6" + s + "9");
    res.push("8" + s + "8");
    res.push("9" + s + "6");
  }

  return res;
};

/**
 * @param {number} n
 * @return {string[]}
 */

function helper(chars, l, r, result) {
  // if l > r - even numbered, no mid mirror
  if (l > r) {
    result.push(chars.join(""));
    return;
  }
  if (l === r) {
    // odd numbered, put at possible mirror at mid
    chars[l] = "0";
    result.push(chars.join(""));
    chars[l] = "1";
    result.push(chars.join(""));
    chars[l] = "8";
    result.push(chars.join(""));
    return;
  }
  if (l !== 0) {
    chars[l] = "0";
    chars[r] = "0";
    helper(chars, l + 1, r - 1, result);
  }

  chars[l] = "1";
  chars[r] = "1";
  helper(chars, l + 1, r - 1, result);

  chars[l] = "6";
  chars[r] = "9";
  helper(chars, l + 1, r - 1, result);

  chars[l] = "8";
  chars[r] = "8";
  helper(chars, l + 1, r - 1, result);

  chars[l] = "9";
  chars[r] = "6";
  helper(chars, l + 1, r - 1, result);
}
var findStrobogrammatic = function(n) {
  let chars = new Array(n).fill(0);
  let result = [];
  helper(chars, 0, n - 1, result);
  return result;
};

console.log(findStrobogrammatic(4));
