/*
Implement int sqrt(int x).

Compute and return the square root of x.

If x is not a perfect square, return floor(sqrt(x))
*/

function squareRootOfAnInteger(A) {
    if (A === 0 || A ===1) {
        return A
    }

    var start = 1
    var end = A
    var ans;
    while(start <= end) {
        var mid = Math.floor((start + end) / 2)

        // perfect square
        if (mid * mid === A) {
            return mid
        }

        if (mid * mid < A) {
            start = mid + 1
            ans = mid
        } else {
            end = mid -1
        }
    }
    return ans

}

var a = 11
console.log(squareRootOfAnInteger(a))