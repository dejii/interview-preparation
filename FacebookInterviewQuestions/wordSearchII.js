/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.chars = new Map();
    this.word = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      if (!temp.chars.has(ch)) {
        temp.chars.set(ch, new TrieNode());
      }
      temp = temp.chars.get(ch);
    }
    temp.word = true;
  }

  search(word) {
    let temp = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      if (!temp.chars.has(ch)) {
        return false;
      }
      temp = temp.chars.get(ch);
    }
    return temp.word;
  }

  startsWith(prefix) {
    let temp = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let ch = prefix.charAt(i);
      if (!temp.chars.has(ch)) {
        return false;
      }
      temp = temp.chars.get(ch);
    }
    return true;
  }
}

function dfs(str, board, i, j, trie, visited, result) {
  if (i < 0 || i >= board.length || j < 0 || j > board[0].length) return;
  if (visited[i][j]) return;
  str += board[i][j];

  if (!trie.startsWith(str)) return;

  if (trie.search(str)) {
    result.add(str);
  }
  visited[i][j] = true;

  dfs(str, board, i + 1, j, trie, visited, result);
  dfs(str, board, i - 1, j, trie, visited, result);
  dfs(str, board, i, j + 1, trie, visited, result);
  dfs(str, board, i, j - 1, trie, visited, result);

  visited[i][j] = false;
}
var findWords = function(board, words) {
  let visited = [];
  for (let i = 0; i < board.length; i++) {
    let temp = new Array(board[i].length).fill(false);
    visited.push(temp);
  }
  let trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let result = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs("", board, i, j, trie, visited, result);
    }
  }

  return Array.from(result);
};

/**
 * Naive way is to search for every word in the dictionary directly by DFS all cells for every word. 
The time complexity will be O(m * n * l * wl) where n is board.length, m is board[0].length, 
l is words.length and wl is the average of length of words in 'words'.

With a Trie to check multiple words at the same time when DFS from a certain cell,
Time: O(m * n * wl) = max(O(l * wl), O(m * n * l * wl)) where
O(l * wl) - Build the trie
O(m * n * l * wl) - In the worst case where all words start with different chracters, and there is 
a word starting with a character in the cell board[m - 1][n - 1], we have O(m * n * l * wl). However, 
if there are words starting with same characters and paths sharing cells, Trie can check multiple 
words when DFS from a certain cell, rather than check only one word when DFS from a certain cell like the naive way.

Space: O(l * wl) = max(O(wl), O(l * wl)) where
O(wl) - The recursive stack can grow at most to wl layers. 
O(l * wl) - In the worst case when all words start with different characters, the trie has l * wl nodes. Also, since each 
word is stored in a leaf node, all the leaf nodes require l * wl memory.
 */
