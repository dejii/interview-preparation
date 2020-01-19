/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor() {
    this.chars = new Map();
    this.word = false;
  }
}
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let temp = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (!temp.chars.has(ch)) {
      temp.chars.set(ch, new TrieNode());
    }
    temp = temp.chars.get(ch);
  }
  temp.word = true;
};
function searchUtil(word, node, idx) {
  if (!node) return false;
  if (idx === word.length) {
    return node.word;
  }

  // recursive search, if not ch, search with next ch
  if (word.charAt(idx) !== ".") {
    // console.log(node)
    return searchUtil(word, node.chars.get(word.charAt(idx)), idx + 1);
  } else {
    // search all links
    for (let ch of node.chars.keys()) {
      if (searchUtil(word, node.chars.get(ch), idx + 1)) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return searchUtil(word, this.root, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/**
  * 
  * public class WordDictionary {

    public class TrieNode {
        public TrieNode[] children = new TrieNode[26];
        public boolean isWord;
    }
    
    private TrieNode root = new TrieNode();

    // Adds a word into the data structure.
    public void addWord(String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            if (node.children[c - 'a'] == null) {
                node.children[c - 'a'] = new TrieNode();
            }
            node = node.children[c - 'a'];
        }
        node.isWord = true;
    }

    // Returns if the word is in the data structure. A word could
    // contain the dot character '.' to represent any one letter.
    public boolean search(String word) {
        return match(word.toCharArray(), 0, root);
    }
    
    private boolean match(char[] chs, int k, TrieNode node) {
        if (k == chs.length) {
            return node.isWord;
        }
        if (chs[k] == '.') {
            for (int i = 0; i < node.children.length; i++) {
                if (node.children[i] != null && match(chs, k + 1, node.children[i])) {
                    return true;
                }
            }
        } else {
            return node.children[chs[k] - 'a'] != null && match(chs, k + 1, node.children[chs[k] - 'a']);
        }
        return false;
    }
}

// Your WordDictionary object will be instantiated and called as such:
// WordDictionary wordDictionary = new WordDictionary();
// wordDictionary.addWord("word");
// wordDictionary.search("pattern");
  */
