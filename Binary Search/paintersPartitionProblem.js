/*
You have to paint N boards of length {A0, A1, A2, A3 … AN-1}. 
There are K painters available and you are also given how much time a painter 
takes to paint 1 unit of board. You have to get this job done as soon as possible under the
 constraints that any painter will only paint contiguous sections of board.

2 painters cannot share a board to paint. That is to say, a board
cannot be painted partially by one painter, and partially by another.
A painter will only paint contiguous boards. Which means a
configuration where painter 1 paints board 1 and 3 but not 2 is
invalid.
Return the ans % 10000003

Input :
K : Number of painters
T : Time taken by painter to paint 1 unit of board
L : A List which will represent length of each board

Output:
     return minimum time to paint all boards % 10000003
Example

Input : 
  K : 2
  T : 5
  L : [1, 10]
Output : 50
*/
function numberOfPaintersRequired (C, mid) {
    var numOfPainters = 1;
    var sum = 0
    for (var i = 0; i < C.length; i++) {
        sum += C[i];
        if (sum > mid) {
            numOfPainters++
            sum = C[i];
        }
    }
    return numOfPainters;
  }
function paintersPartitionProblem(A, B, C) {
    var max = -Infinity;
    var sum = 0;
    for(var i = 0; i < C.length; i++) {
        var temp = C[i] * B;
        sum += temp;
        max = Math.max(max, temp);
        C[i] = temp;
    }

    console.log(max, sum, C);
    
    var start = max;
    var end = sum;
    var ans = Infinity;
    
    while (start <= end) {
        var mid = start + Math.floor((end - start) / 2);
        
        if (numberOfPaintersRequired(C, mid) <= A) {
            // console.log('here ')
            ans = Math.min(ans, mid);
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return ans % 10000003;
}

var a = 3
var b = 10
var c = [ 640, 435, 647, 352, 8, 90, 960, 329, 859 ]
var a = 2
var b = 5
var c = [10, 20, 30, 40]
console.log(paintersPartitionProblem(a, b, c))