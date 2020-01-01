
/*
Given the array of strings A, 
you need to find the longest string S which is the prefix of ALL the strings in the array.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 
and S2.

For Example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".

*/

function longestCommonPrefix(A) {
    // get the shortest word
    var min = Infinity;
    var minWord = '';
    for (var i = 0; i < A.length; i++) {
        if (A[i].length < min) {
            minWord = A[i];
        }
    }
    result = '';
    i = 0;
    // console.log(minWord[0])
    while(i < minWord.length) {
        for (var j = 0; j < A.length; j++) {
            // console.log(A[j][i])
            if (A[j][i] !== minWord[i]) {
                return result
            }
        }
        result += minWord[i];
        i++
    }

    return result
}

// var a = ["abcdefgh", "aefghijk", "abcefgh"]
var a = ["abab", "ab", "abcd"]
console.log(longestCommonPrefix(a))