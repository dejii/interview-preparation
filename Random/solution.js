function compress(s) {
  let res = [];
  let n = s.length;
  for (let i = 0; i < n;) {
    let j = i;
    while (j < n && s[j] === s[j + 1]) {
      j++;
    }
    if (i - j === 0) {
      res.push(s[i]);
      i++;
    } else {
      res.push(`${Math.abs(j - i + 1)}${s[j]}`);
      i = j + 1;
    }
  }

  return res.join("");
}

function solution(S, K) {
  let n = S.length;
  let ans = "";
  let min = Infinity;
  for (let i = 0; i < n - K + 1; i++) {
    let b = S.substring(0, i);
    let a = S.substring(i + K, n);
    let val = b + a;
    let comp = compress(val);
    if (comp.length < min) {
      ans = comp;
      min = comp.length;
    }
  }
  console.log(ans);
  return min;
}

// console.log(compress("ABBBCCDDCCC"));con
// console.log(solution("ABBBCCDDCCC", 3));
// console.log(solution("AAAAAAAAAAAABXXAAAAAAAAAAAA", 3));
