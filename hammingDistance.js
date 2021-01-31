
function hammingDistance(A) {
    var mod = 1000000007;
    sum = 0;

    for (var bitPosition = 0; bitPosition < 31; bitPosition++) {
        var countBitOne = 0;
        var countBitZero = 0;
        for (var i = 0; i < A.length; i++) {
            if (A[i] & (1 << bitPosition)) {
                countBitOne++
            } else {
                countBitZero++
            }
        }
        sum += 2 * countBitOne * countBitZero
    }
    return sum % mod
}
var a = [2,4,6,7]
console.log(hammingDistance(a))

