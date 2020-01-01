
function validDigit(digit) {
    if (!digit) {
        return false;
    }
    var valid = '1234567890';
    if (valid.indexOf(digit[0]) === -1) {
            return false;
    }
    for (var i = 0; i < digit.length; i++) {
        if (digit[i] === 'e') {
            return this.validExponent(digit.substring(i+1))
        } else if (valid.indexOf(digit[i]) === -1) {
            return false;
        }
    }

    return true; 
}

function validExponent(digit) {
    if (!digit) {
        return false;
    }
    var valid = '+-1234567890';
    for (var i = 0; i < digit.length; i++) {
        if (valid.indexOf(digit[i]) === -1) {
            return false;
        }
    }

    return true;
}


function validNumber(A) {
    A = A.trim();
	    
    if (A === '') {
        return 0
    }
    
    var wholeNumbers = ''
    var decimalNumbers = ''
    var exponent = ''
    var isDecimal = false
    var isExponential = false
    
    // var sign = 1;
    // var exponentSign = 1
    if (A[0] === '-' || A[0] === '+') {
        A = A.substring(1)
    }
    
    for(var i = 0; i < A.length; i++) {
        if (A[i] === '.') {
            if (i === 0) {
                return 0
            }
            isDecimal = true
            decimalNumbers = A.substring(i+1)
            break
        } else if (A[i] === 'e') {
            if (i === 0) {
                return 0
            }
            isExponential = true
            exponent = A.substring(i + 1)
            break
            
        } else if (('0' <= A[i]) && (A[i] <= '9')) {
                wholeNumbers += A[i]
        } else {
            return 0
        }
        
    }
    // console.log(wholeNumbers)
    // console.log(decimalNumbers)
    // console.log(exponent)
    if (isDecimal) {
        return validDigit(decimalNumbers) ? 1 : 0
    }
    if (isExponential) {
        return validExponent(exponent) ? 1 : 0
    }
    
    return 1
}

var a = '0'
console.log(validNumber(a))