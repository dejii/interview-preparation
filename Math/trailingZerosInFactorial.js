
function trailingZeros(A) {
    var count = 0

    var i = 5
    while (A/i >= 1) {
        count += parseInt(A/i);
        i *= 5;
    }
    return count
}

var a = 120
console.log(trailingZeros(a))