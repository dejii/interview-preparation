/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let count = new Map();
  let i = 0;
  let distinct = 0;
  let res = 0;
  // sliding window
  // whenever k > 3 we move the left window until distinct == k
  for (let j = 0; j < s.length; j++) {
    let rightCh = s.charAt(j);
    if (!count.has(rightCh)) {
      count.set(rightCh, 0);
    }
    if (count.get(rightCh) === 0) {
      // distinct ch
      distinct++;
    }
    // increment count
    count.set(rightCh, count.get(rightCh) + 1);

    while (distinct > k && i < s.length) {
      let leftCh = s.charAt(i);
      if (!count.has(leftCh)) {
        count.set(leftCh, 0);
      }
      count.set(leftCh, count.get(leftCh) - 1);
      if (count.get(leftCh) === 0) {
        distinct--;
      }
      i++;
    }
    res = Math.max(res, j - i + 1);
  }
  return res;
};

/**
 * 
 * public class Solution {
    public List<Integer> slidingWindowTemplateByHarryChaoyangHe(String s, String t) {
        //init a collection or int value to save the result according the question.
        List<Integer> result = new LinkedList<>();
        if(t.length()> s.length()) return result;
        
        //create a hashmap to save the Characters of the target substring.
        //(K, V) = (Character, Frequence of the Characters)
        Map<Character, Integer> map = new HashMap<>();
        for(char c : t.toCharArray()){
            map.put(c, map.getOrDefault(c, 0) + 1);
        }
        //maintain a counter to check whether match the target string.
        int counter = map.size();//must be the map size, NOT the string size because the char may be duplicate.
        
        //Two Pointers: begin - left pointer of the window; end - right pointer of the window
        int begin = 0, end = 0;
        
        //the length of the substring which match the target string.
        int len = Integer.MAX_VALUE; 
        
        //loop at the begining of the source string
        while(end < s.length()){
            
            char c = s.charAt(end);//get a character
            
            if( map.containsKey(c) ){
                map.put(c, map.get(c)-1);// plus or minus one
                if(map.get(c) == 0) counter--;//modify the counter according the requirement(different condition).
            }
            end++;
            
            //increase begin pointer to make it invalid/valid again
            while(counter == 0 /* counter condition. different question may have different condition *){
                
                char tempc = s.charAt(begin);//***be careful here: choose the char at begin pointer, NOT the end pointer
                if(map.containsKey(tempc)){
                    map.put(tempc, map.get(tempc) + 1);//plus or minus one
                    if(map.get(tempc) > 0) counter++;//modify the counter according the requirement(different condition).
                }
                
                /* save / update(min/max) the result if find a target
                // result collections or result int value
                
                begin++;
            }
        }
        return result;
    }
}
 */
