
function antiDiagonals(A) {
    // the diagonals of an nxn matrix -> (nx2) - 1
    var n = A.length;
    var m = (A.length * 2) - 1
    var result = [];
    for (var i = 0; i < m; i++) {
        result.push([]);
    }
    console.log(result)
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // console.log(i+j)
            // console.log(result[i+j])
            result[i+j].push(A[i][j])
        }
    }
    return result;

}
var a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(antiDiagonals(a))