

function excelColumnNumber(A) {
    var startCharCode = 'A'.charCodeAt(0) - 1;
    var result = 0;
    var power = 0;
    for (var i = A.length-1; i>=0; i--)  {
        var value = A.charCodeAt(i) - startCharCode;
        result += value * (Math.pow(26, power));
        power++
    }
    return result;
}

var a = 'AB'
console.log(excelColumnNumber(a))