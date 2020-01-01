function boundResult(res) {
    
    if (res > (Math.abs(1 << 31) - 1)) {
        return (Math.abs(1 << 31) - 1)
    } else if (res < -Math.abs(1 << 31)) {
        return -Math.abs(1 << 31)
    } else {
        return res
    }
}

function divideIntegers(A, B) {
    var sign = ((A < 0) ^ (B < 0)) ? -1 : 1;
    // console.log(sign)
    A = Math.abs(A);
    B = Math.abs(B);
    // var temp = 0;
    // var quotient = 0;
    // for(var i = 31; i >= 0; i--) {
    //     if((temp + Math.abs(B << i)) <= A) {
    //         console.log(Math.abs(B<<i) + ' | ' + i)
    //         temp = temp + Math.abs(B << i);
    //         quotient = quotient | Math.abs(1 << i);
    //     }
    // }
    // quotient = Math.abs(quotient)

    // // console.log(sign*quotient)
    // // console.log(quotient)
    // // console.log(sign)
    // return boundResult(sign*quotient)

    var res = 0;
    while (A >= B) {
        var temp = B
        var i = 1;
        while (A >= temp) {
            A -= temp
            res += i
            i <<= 1
            temp <<= 1
        }
    }

    return boundResult(sign*res)
    
}

console.log(divideIntegers(-2147483648, -10000000))