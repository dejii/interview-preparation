/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
  let str = S.split(" ");
  let vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let word = str[i];
    if (vowelSet.has(word.charAt(0))) {
      word = word + "ma";
    } else {
      word = word.substring(1) + word.substring(0, 1) + "ma";
    }
    result.push(word);
  }
  let arr = [];
  for (let i = 0; i < result.length; i++) {
    let word = result[i];
    word = word + "a".repeat(i + 1);
    arr.push(word);
  }
  return arr.join(" ");
};

/**
 *  public String toGoatLatin(String S) {
        Set<Character> vowel = new HashSet<Character>();
        for (char c : "aeiouAEIOU".toCharArray()) vowel.add(c);
        String res = "";
        int i = 0, j = 0;
        for (String w : S.split("\\s")) {
            res += ' ' + (vowel.contains(w.charAt(0)) ? w : w.substring(1) + w.charAt(0)) + "ma";
            for (j = 0, ++i; j < i; ++j) res += "a";
        };
        return res.substring(1);
    }
 */
