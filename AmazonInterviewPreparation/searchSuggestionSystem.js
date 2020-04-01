/*
    Given an array of strings products and a string searchWord
    . We want to design a system that suggests at most three product names 
    from products after each character of searchWord is typed. Suggested products
     should have common prefix with the searchWord. If there are more than three products 
     with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.

*/

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  let result = [];
  products.sort(function(a, b) {
    return a.localeCompare(b);
  });
  // n = searchword
  // m = products length
  for (let i = 0; i < searchWord.length; i++) {
    // O(n)
    let temp = [];
    let toSearch = searchWord.substring(0, i + 1); // O(n)

    let j = 0;

    // -- O(n x m)
    while (j < products.length && temp.length < 3) {
      // O(m)
      let s = products[j].substring(0, i + 1); // O(n)
      if (toSearch === s) {
        // O(n)
        temp.push(products[j]);
      }
      j++;
    }
    result.push(temp);
  }
  return result;

  // T -> O(n x n x m)
  // S -> O(n x m)
};

class TrieNode {
  constructor() {
    this.chars = new Map();
    this.suggestions = [];
  }
}
var suggestedProducts = function(products, searchWord) {
  let result = [];
  // sort
  products.sort((a, b) => a.localeCompare(b));
  let root = new TrieNode();
  for (let product of products) {
    let t = root;
    for (let ch of product) {
      if (!t.chars.has(ch)) {
        t.chars.set(ch, new TrieNode());
      }
      t = t.chars.get(ch);
      if (t.suggestions.length < 3) {
        t.suggestions.push(product);
      }
    }
  }

  for (let ch of searchWord) {
    if (root) {
      root = root.chars.get(ch);
    }
    result.push(root ? root.suggestions : []);
  }
  return result;
};
/*
Complexity depends on the sorting, the process of building Trie and the length of searchWord. 
Sorting cost O(m * n * logn), due to involving comparing String, which cost time O(m) for 
each comparison, building Trie cost O(m * n). Therefore,
Time: O(m * n * logn + L), space: O(m * n + L * m), where m = average length of products, 
n = products.length, L = searchWord.length().
*/

let products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"];
let searchWord = "mouse";
console.log(suggestedProducts(products, searchWord));
