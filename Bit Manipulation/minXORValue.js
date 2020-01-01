/*
Given an array of N integers, find the pair of integers in the array 
which have minimum XOR value. Report the minimum XOR value.

Examples :
Input
0 2 5 7
Output
2 (0 XOR 2)
Input
0 4 7 9
Output
3 (4 XOR 7)

Constraints:
2 <= N <= 100 000
0 <= A[i] <= 1 000 000 000
*/

function minXORValue(A) {
    A.sort(function(a,b) {return a - b});
        
    var min = Infinity;
    for (var i = 0; i < A.length - 1; i ++) {
        min = Math.min(A[i] ^ A[i+1], min);
    }
    
    return min;

}

var a = '';
console.log(minXORValue(a));