var validKey = function(s) {
  s = parseInt(s);
  return s <= 26 && s >= 0;
};
var numDecodings = function(s) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const mapping = {};
  let i = 1;
  for (const letter of letters) {
    mapping[i++] = letter;
  }

  for (let i = 0; i < s.length - 1; i++) {
    const p1 = s[i];
    for (let j = i + 1; j < s.length; j++) {
      const p2 = s.substring(j);
      console.log(p1 + p2);
    }
  }
};

numDecodings("226");
