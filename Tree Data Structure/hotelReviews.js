function TrieNode() {
  this.chars = {};
  this.word = false;
}

function Trie() {
  var root = new TrieNode();
  var self = this;

  this.add = function(word) {
    var self;
    var temp = root;
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
      if (!temp.chars.hasOwnProperty(char)) {
        temp.chars[char] = new TrieNode();
      }
      temp = temp.chars[char];
    }
    temp.word = true;
  };

  this.contains = function(word) {
    var temp = root;
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

function solve(A, B) {
  var trie = new Trie();
  var result = {};
  var words = A.split("_");
  for (var i = 0; i < words.length; i++) {
    trie.add(words[i]);
  }
  for (var i = 0; i < B.length; i++) {
    var goodnessCount = 0;
    var word = B[i].split("_");
    for (var j = 0; j < word.length; j++) {
      goodnessCount = trie.contains(word[j])
        ? (goodnessCount += 1)
        : (goodnessCount += 0);
    }
    if (result.hasOwnProperty(goodnessCount)) {
      result[goodnessCount].push(i);
    } else {
      result[goodnessCount] = [i];
    }
  }

  var keys = Object.keys(result).sort(function(x, y) {
    return y - x;
  });
  var ans = [];
  for (var i = 0; i < keys.length; i++) {
    ans = ans.concat(result[keys[i]]);
  }

  return ans;
}

console.log(
  solve("cool_ice_wifi", ["water_is_cool", "cold_ice_drink", "cool_wifi_speed"])
);
