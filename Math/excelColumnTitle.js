
function excelColumnTitle(A) {
    var startCharCode = 'A'.charCodeAt(0) - 1;
    result = '';
    
    while (A>0) {
        var value = A % 26
        if (value === 0) {
            result += 'Z'
            A = Math.floor(A/26) - 1
        } else {
            result += String.fromCharCode(value + startCharCode)
            A = Math.floor(A/26)
        }
    }
    return result.split('').reverse().join('')

}

var a = 676
console.log(excelColumnTitle(a))