/*
    Given an index k, return the kth row of the Pascal’s triangle.

    Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

    Example:

    Input : k = 3

    Return : [1,3,3,1]
    NOTE : k is 0 based. k = 0, corresponds to the row [1]. 
    Note:Could you optimize your algorithm to use only O(k) extra space?
*/
function kthRowPascalTriangle(A) {
    A++
    if (A < 1) {
        return []
    }

    var result = [[1]];

    for(var i = 1; i < A; i++) {
            var left = [1]
            var right = [1]
            var mid = []
            var prev = result[i - 1]
            for(var j = 0; j < prev.length - 1; j++) {
                    if (prev.length > 1) {
                            mid.push(prev[j] + prev[j+1])
                    }
            }
            var r = left.concat(mid).concat(right) 
            result.push(r)
    }
    console.log(result)

    return result[result.length - 1]
}

function kthRowPascalTriangleLight(A) {
    if (A < 1) {
        return []
    }

    var result = [];
    var n = 1;
    for(var col = 0; col <= A; col++) { // nth row will have n + 1 elements in pascal triangle
        result.push(n);
        n = n * (A - col)/(col + 1);// mathematics
        console.log(n)
    }

    return result;
}

// console.log(kthRowPascalTriangle(3))
console.log(kthRowPascalTriangleLight(5))