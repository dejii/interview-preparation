/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let arr = [];

  for (let s of str) {
    if ("A" <= s && s <= "Z") {
      let ch = String.fromCharCode(
        s.charCodeAt(0) - "A".charCodeAt(0) + "a".charCodeAt(0)
      );
      arr.push(ch);
    } else {
      arr.push(s);
    }
  }
  return arr.join("");
};
