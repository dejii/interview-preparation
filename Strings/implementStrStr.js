/*
Please Note:
Another question which belongs to the category of questions which are intentionally stated vaguely. 
Expectation is that you will ask for correct clarification or you will state your assumptions before you start coding.

Implement strStr().

 strstr - locate a substring ( needle ) in a string ( haystack ). 
Try not to use standard library string functions for this question.

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 NOTE: Good clarification questions:
What should be the return value if the needle is empty?
What if both haystack and needle are empty?
For the purpose of this problem, assume that the return value should be -1 in both cases. 
*/

function strStr(A, B) {
    if (!A || !B) {
        return -1
    }
    
    for (var i = 0; i < A.length; i++) {
        for (var j =0; j < B.length && i + j < A.length; j++) {
            if (A[i+j] !== B[j]) {
                break;
            } else if (j === B.length -1) {
                return i
            }
        }
        
    
}
    return -1
}

var a = 'dsfdfddejidfsdf'
var b = 'deji'
console.log(strStr(a,b))