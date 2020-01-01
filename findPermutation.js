/*
Given a positive integer n and a string s consisting only of letters D or I, 
you have to find any permutation of first n positive integer that satisfy the given input string.

D means the next number is smaller, while I means the next number is greater.

Notes

Length of given string s will always equal to n - 1
Your solution should run in linear time and space.
Example :

Input 1:

n = 3

s = ID

Return: [1, 3, 2]

*/

function findPermutation(A, B) {
    var min = 1;
    var max = B;
    var result = []
    for (var i = 0; i < A.length; i++) {
        if (A[i] === 'D') {
            result.push(max)
            max--
        } else if (A[i] === 'I') {
            result.push(min)
            min++
        }
        console.log(result)
    }
    result.push(min)
    return result;
}

console.log(findPermutation('DIDD', 5)) 