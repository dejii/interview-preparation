/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
function helper(chars, l, r, result, low, high) {
  //   console.log(chars);
  // if l > r - even numbered, no mid mirror
  if (l > r) {
    // referenceString.localeCompare(compareString)

    let s = chars.join("");
    // console.log(s);
    if (parseInt(s) >= parseInt(low) && parseInt(s) <= parseInt(high)) {
      result.count++;
    }

    return;
  }
  if (l === r) {
    // odd numbered, put at possible mirror at mid
    chars[l] = "0";

    let s = chars.join("");
    // console.log(s);
    if (parseInt(s) >= parseInt(low) && parseInt(s) <= parseInt(high)) {
      result.count++;
    }
    chars[l] = "1";
    s = chars.join("");
    // console.log(s);
    if (parseInt(s) >= parseInt(low) && parseInt(s) <= parseInt(high)) {
      result.count++;
    }
    chars[l] = "8";
    s = chars.join("");
    // console.log(s);
    if (parseInt(s) >= parseInt(low) && parseInt(s) <= parseInt(high)) {
      result.count++;
    }

    return;
  }
  if (l !== 0) {
    chars[l] = "0";
    chars[r] = "0";
    helper(chars, l + 1, r - 1, result, low, high);
  }

  chars[l] = "1";
  chars[r] = "1";
  helper(chars, l + 1, r - 1, result, low, high);

  chars[l] = "6";
  chars[r] = "9";
  helper(chars, l + 1, r - 1, result, low, high);

  chars[l] = "8";
  chars[r] = "8";
  helper(chars, l + 1, r - 1, result, low, high);

  chars[l] = "9";
  chars[r] = "6";
  helper(chars, l + 1, r - 1, result, low, high);
}
var strobogrammaticInRange = function(low, high) {
  //   console.log(parseInt(low));
  // return
  let result = { count: 0 };
  for (let len = parseInt(low); len <= parseInt(high); len++) {
    helper(new Array(len).fill(0), 0, len - 1, result, low, high);
    return;
  }
  return result.count;
};

console.log(strobogrammaticInRange("50", "100"));
