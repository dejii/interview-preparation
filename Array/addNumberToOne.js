function addNumberToOne(A) {
    var i = A.length - 1;
    var add = 1;
    var hasLeadingOne = true
    
    while(i >= 0) {
        var s = A[i] + add
        A[i] = s % 10
        add = Math.floor(s / 10)
        i--
        // console.log(Math.floor(s / 10))
        if (add === 0) {
            hasLeadingOne = false;
            break
        }
    }
    
    if (hasLeadingOne) {
        A.unshift(1)
    }
    while (A && A[0] === 0) {
        A.shift()
    }
    return A
}

var a = [9,9,9]
console.log(addNumberToOne(a))