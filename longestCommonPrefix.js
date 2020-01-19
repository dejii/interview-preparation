/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let min = Infinity;
  let minWord = "";
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < min) {
      min = strs[i].length;
      minWord = strs[i];
    }
  }

  let i = 0;
  let result = "";
  while (i < minWord.length) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== minWord[i]) {
        return result;
      }
    }
    result += minWord[i];

    i++;
  }

  return result;
};

class TrieNode {
  constructor() {
    this.chars = {};
    this.isEnd = false;
  }

  getLinks() {
    return Object.keys(this.chars).length;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      if (!temp.chars[ch]) {
        temp.chars[ch] = new TrieNode();
      }
      temp = temp.chars[ch];
    }
    temp.isEnd = true;
  }

  searchLongestPrefix(word) {
    let temp = this.root;
    let result = "";
    for (let i = 0; i < word.length; i++) {
      const ch = word.charAt(i);
      if (temp.chars[ch] && temp.getLinks() === 1 && !temp.isEnd) {
        result += ch;
        temp = temp.chars[ch];
      } else {
        return result;
      }
    }
    return result;
  }
}

const trie = new Trie();
// trie.insert("flower");
// trie.insert("flow");
// trie.insert("flight");
trie.insert("cup");
trie.insert("car");
console.log(trie.searchLongestPrefix("cup"));
