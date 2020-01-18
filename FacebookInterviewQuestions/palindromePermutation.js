/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let map = new Map();
  for (let ch of s) {
    if (!map.has(ch)) {
      map.set(ch, 0);
    }
    map.set(ch, map.get(ch) + 1);
  }

  let oddCount = 0;
  for (let [_, count] of map) {
    if (count & 1) {
      oddCount++;
    }
  }

  return oddCount <= 1;
};

/**
 * public class Solution {
    public boolean canPermutePalindrome(String s) {
        Set<Character> set=new HashSet<Character>();
        for(int i=0; i<s.length(); ++i){
            if (!set.contains(s.charAt(i)))
                set.add(s.charAt(i));
            else 
                set.remove(s.charAt(i));
        }
        return set.size()==0 || set.size()==1;
    }
}
 */
