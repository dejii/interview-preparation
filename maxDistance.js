/* 
    Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

    If there is no solution possible, return -1.

    Example :

    A : [3 5 4 2]

    [100, 100, 100, 100, 100]

    Output : 2 
    for the pair (3, 4)

*/

function maxDistance(A) {
    var n = A.length;
    if (n === 1) {
        return 0
    }
    var Lmin = [];
    for (var i = 0; i < n; i++) {
        Lmin.push(0)
    }

    var Rmax = [];
    for (var i = 0; i < n; i++) {
        Rmax.push(0)
    }

    Lmin[0] = A[0]
    Rmax[n-1] = A[n-1]
    for (var i = 1; i < n; i++) {
        Lmin[i] = Math.min(Lmin[i-1], A[i])
    }

    for (var i = n -2; i >= 0; i--) {
        Rmax[i] = Math.max(A[i], Rmax[i+1])
    }
    // console.log(Lmin,Rmax)
    var i = 0
    var j = 0
    var ret = -1

    while(i < n && j < n) {
        if(Lmin[i] <= Rmax[j]){
            ret = Math.max(ret, j-i)
            j += 1
        } else {
            i += 1
        }
    }

    return ret

}
var a = [3, 5, 4, 2]
console.log(maxDistance(a))