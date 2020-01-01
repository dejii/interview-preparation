

function differentBitsSumPairwise(A) {
    var sum = 0;
	    
    for (var i = 0; i < 31; i++) {
        var countBitZero = 0;
        var countBitOne = 0;
        for (var j = 0; j < A.length; j++) {
            if (A[j] & Math.abs(1 << i)) {
                countBitOne++
            } else {
                countBitZero++
            }
        }
        sum += (2 * countBitOne * countBitZero) % (Math.pow(10, 9) + 7)
    }
    return sum % (Math.pow(10, 9) + 7)
}

console.log(differentBitsSumPairwise([1,3,5,6,4,3,23,5,6,75,3,2,45,78,6,8643,22]))