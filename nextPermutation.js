

function nextPermutation(A) {
    var i = A.length -1;
    while(i > 0 && A[i-i] > A[i]) {
        i--
    }

    if (i <= 0) {
        return A.reverse()
    }

    var j = A.length - 1
    while (A[j] < A[i-1]) {
        j--
    }

    var temp = A[i-1]
    A[i-1] = A[j]
    A[j] = temp

    var j = A.length - 1
    while(i < j) {
        var temp = A[i]
        A[i] = A[j]
        A[j] = temp
        i++
        j--
    }

    return A



}

var a = [20, 50, 113]
console.log(nextPermutation(a))