/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example:

"A man, a plan, a canal: Panama" is a palindrome.

"race a car" is not a palindrome.

Return 0 / 1 ( 0 for false, 1 for true ) for this problem

*/

/* 

*/
function isPalindrome(A) {
    // create a string of letters only
    var s = [];
    for (var i = 0; i < A.length; i++) {
        if (('A' <= A[i] && A[i] <= 'Z') || ('a' <= A[i] && A[i] <= 'z') || ('0' <= A[i] && A[i] <= '9')) {
            s.push(A[i]);
        }
    }
    console.log(s.join())
    console.log(s.reverse().join())

    return s.join('').toLowerCase() === s.reverse().join('').toLowerCase()

}

var a = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(a))