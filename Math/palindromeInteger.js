
function palindromeInteger(A) {
    if (A < 0) {
        return 0
    }
    var reversedNumber = parseInt(A.toString().split('').reverse().join(''))
    
    return A === reversedNumber ? 1 : 0;
}

var a = 12121;
console.log(palindromeInteger(a))