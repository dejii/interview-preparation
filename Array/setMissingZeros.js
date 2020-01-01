
function setMissingZeros(A) {
    var n = A.length;
    var m = A[0].length;
    var isFirstRowZero = false;
    for (var j = 0; j < m; j++) {
        if (A[0][j] === 0) {
            isFirstRowZero = true;
        }
    }

    for (var i = 1; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (A[i][j] === 0) {
                A[0][j] = 0;
                A[i][0] = 0
            }
        }
    }

    for (var i = 1; i < n; i++) {
        if (A[i][0] === 0) {
            for (var j = 0; j < m; j++) {
                A[i][j] = 0
            }
        }
    }

    for (var j = 0; j < m; j++) {
        if (A[0][j] === 0) {
            for (var i = 1; i < n; i++) {
                A[i][j] = 0
            }
        }
    }

    if (isFirstRowZero) {
        for (var j = 0; j < m; j++) {
            A[0][j] = 0
        }
    }

    return A;

}

var a = [
    [0,1],
    [1,1]
]
console.log(setMissingZeros(a))