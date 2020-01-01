function isPalindrome(A) {
  for (var i = 0; i < Math.floor(A.length / 2); i++) {
    if (A[i] !== A[A.length - i - 1]) {
      return false;
    }
  }
  return true;
}
function minimumCharactersToMakePalindromicString(A) {
  var count = 0;

  for (var i = A.length - 1; i > 0; i--) {
    if (isPalindrome(A.substring(0, i + 1))) {
      // return A.length - i - 1
      return A.substring(i + 1);
    }
  }
  return count;
}

// babb
// bbab
var a = "babbb";
// var a = "aacecaaa"
console.log(minimumCharactersToMakePalindromicString(a));
