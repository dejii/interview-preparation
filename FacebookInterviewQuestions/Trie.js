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

// insert O(lxn) - l avg len of words, n no of words

/**
 * 
 *  /** Deletes a word.
 boolean delete(String word) {
    TrieNode node=find(word);
    if(node==null) return false;//no such word
    boolean noChild=false;    
    for(TrieNode t:node.children){
        if(t!=null) noChild=true;
    }
    if(noChild){
        node=null;//node is the leaf, so we just delete it.
    }else{
        node.isEnd=false;//node is not the leaf, we can just set node.isEnd to false.
    }
    return true;
}
 */
