function longestSubstringWithoutRepeatBrute(A) {
  var max = 0;
  for (var i = 0; i < A.length; i++) {
    var store = {};
    for (var j = i; j < A.length; j++) {
      if (store.hasOwnProperty(A[j])) {
        break;
      } else {
        // console.log(A.substring(i, j + 1));
        max = Math.max(max, j - i + 1);
        store[A[j]] = 1;
      }
    }
  }
  return max;
}
/*
the basic idea is, keep a hashmap which stores the characters in string as keys 
and their positions as values, and keep two pointers which define the max substring.
 move the right pointer to scan through the string , and meanwhile update the hashmap. 
 If the character is already in the hashmap, then move the left pointer to the right of 
 the same character last found. Note that the two pointers can only move forward.
*/
function longestSubstringWithoutRepeat(A) {
  var max = 0;
  var store = {};
  for (var i = 0, j = 0; i < A.length; i++) {
    if (store.hasOwnProperty(A[i])) {
      j = Math.max(j, store[A[i]] + 1);
    }
    store[A[i]] = i;
    max = Math.max(max, i - j + 1);
  }
  return max;
}

var a = "dadbc";
// var a = "u";
console.log(longestSubstringWithoutRepeat(a));
