/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let set = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                let first = words[i];
                let second = words[j];
                if (second.indexOf(first) > -1) {
                    set.add(words[i]);
                }
            }
        }
    }
    return Array.from(set);
};
let arr = ["mass", "as", "hero", "superhero"]
arr = ["leetcode", "et", "code"]
arr = ["blue", "green", "bu"]
console.log(stringMatching(arr))