function letterCombinationsIterative(digits) {
  let ans = [];
  if (digits.length === 0) return ans;
  mapping = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  ans.push("");
  for (let i = 0; i < digits.length; i++) {
    let x = digits[i];
    console.log(`x -> ${x}`);
    console.log(`while ${ans} && ${ans[0].length} === ${i}`);
    while (ans && ans[0].length === i) {
      let t = ans.shift();
      console.log(`remove -> ${t}`);
      for (const s of mapping[x]) {
        console.log(`add ${t} + ${s} -> ${t + s}`);
        ans.push(t + s);
        console.log(`ans -> ${ans}`);
      }
    }
  }
  return ans;
}

console.log(letterCombinationsIterative("234"));

function letterCombinationsRecursive(res, digits, current, index, mapping) {
  if (index === digits.length) {
    res.push(current);
    return;
  }
  let letters = mapping[digits[index]];
  for (let i = 0; i < letters.length; i++) {
    letterCombinationsRecursive(
      res,
      digits,
      current + letters[i],
      index + 1,
      mapping
    );
  }
}

var letterCombinations = function(digits) {
  let res = [];
  if (digits.length === 0) {
    return res;
  }
  let mapping = {
    0: "0",
    1: "1",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  letterCombinationsRecursive(res, digits, "", 0, mapping);
  return res;
};
