function TrieNode() {
  this.chars = {};
  this.word = false;
}

function Trie() {
  var root = TrieNode();
  var self = this;

  this.add = function(word) {
    var temp = self.root;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!temp.chars.hasOwnProperty(char)) {
        temp.chars[char] = TrieNode();
      }
      temp = temp.chars[char];
    }
    temp.word = true;
  };

  this.contains = function(word) {
    var temp = self.root;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!temp.chars.hasOwnProperty(char)) {
        return false;
      }
      temp = temp.chars[char];
    }
    return temp.word;
  };
}
