/*
    Given numRows, generate the first numRows of Pascal’s triangle.

    Pascal’s triangle : To generate A[C] in row R, sum up A’[C] and A’[C-1] from previous row R - 1.

    Example:

    Given numRows = 5,

    Return

    [
        [1],
        [1,1],
        [1,2,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]

*/

function pascalTriangle (A) {

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

    return result
}
console.log(pascalTriangle(5))