/*
Given two binary strings, return their sum (also a binary string).

Example:

a = "100"

b = "11"
Return a + b = “111”.
*/
function addBinaryStrings(A, B) {
    var diff = Math.abs(A.length - B.length);
    var a = '';
    var b = ''
    if (A.length < B.length) {
        for (var i = 0; i < diff; i++) {
            a += '0';
        }
        a += A;
        b = B
    } else if (B.length < A.length) {
        for (var i = 0; i < diff; i++) {
            b += '0';
        }
        b += B
        a = A
    } else {
        a = A;
        b = B;
    }

    a = a.split('');
    b = b.split('');

    console.log(a.length)

    var result = [];
    for (var i = 0; i < A.length; i++) {
        result.push(0);
    }

    var hasLeadingOne = false;

    var i = a.length - 1 || b.length - 1;

    console.log(i)
      
    while(i >= 0) {
        
        var s = parseInt(a[i]) + parseInt(b[i]) + carry;
        carry = Math.floor(s / 2);
        // console.log(carry)
        result[i] = s % 2 

        if(i === 0 && carry > 0) {
            hasLeadingOne = true;
        }

        i--
    }

    console.log(result.length)
    if (hasLeadingOne) {
        result.unshift(1)
    }

    return result.length
    // return result.join('')

}

var a = '1010110111001101101000'
var b = '1000011011000000111100110'
console.log(addBinaryStrings(a, b))

/*
111
111
*/