

function multiplyStrings(A, B) {
    if (A.length < B.length) {
        var temp = A
        A = B
        B = temp
    }
    var a = A;
    var b = B;

    var sumArray = {};
    // var sumArray = [];
    for (var j = 0; j < b.length; j++) {
        var temp = [];
        for (var k = 0; k < (a.length + 1) * 2; k++) {
            temp.push(0)
        }
        // sumArray.push(temp)
        sumArray[j] = temp
    }
    // console.log(sumArray);

    var i = b.length - 1;
    var pos = 0;
    while (i >= 0) {
        // var m = multiply(a, b[i])
        // console.log(m)
        insert(sumArray[pos], multiply(a, b[i]), pos)
        pos++
        i--
    }
    
    result = [];
    for (var i = 0; i < sumArray[0].length; i++) {
        result.push(0)
    }
    // console.log(sumArray)

    var i = sumArray[0].length - 1
    var carry = 0;
    while (i >= 0) {
        sum = 0;
        // for (j = 0; j < sumArray.length; j++) {
        for (var key in sumArray) {
            sum += sumArray[key][i];
        }
        sum += carry;

        result[i] = Math.floor(sum % 10)
        carry = Math.floor(sum / 10);

        i--

    }
    // console.log(result)

    while(result[0] === 0) {
        result.shift()
    }
    
    if (!result.length) {
        return 0
    }
    return result.join('')

}

function insert(arr, arr2, offset) {
    var idx = 0;
    for (var n = arr.length - arr2.length - offset; n < arr.length; n++) {
        arr[n] = arr2[idx]
        idx++
        if (idx >= arr2.length) {
            break
        }
    }
    // return arr
}

function multiply(a, b) {
    a = a.split('')
    i = a.length - 1;
    var carry = 0;
    while(i >=0) {
        var mul = (parseInt(a[i]) * parseInt(b)) + carry
        a[i] = Math.floor(mul % 10);
        carry = Math.floor(mul / 10);
        i--
    }
    if (carry !== 0) {
        a.unshift(carry)
    }
    // console.log(a)

    return a
}

var a = '01235421415454545454545454544'
var b = '1714546546546545454544548544544545'
// console.log(multiplyStrings(a, b))
// console.log(multiply('320', '0'))


// https://github.com/gigglegrig/LeetCode/wiki/43.-Multiply-Strings
/*
    def multiply(num1, num2):
    product = [0] * (len(num1) + len(num2))
    pos = len(product)-1
    
    for n1 in reversed(num1):
        tempPos = pos
        for n2 in reversed(num2):
            product[tempPos] += int(n1) * int(n2)
            product[tempPos-1] += product[tempPos]/10
            product[tempPos] %= 10
            tempPos -= 1
        pos -= 1
        
    pt = 0
    while pt < len(product)-1 and product[pt] == 0:
        pt += 1

    return ''.join(map(str, product[pt:]))
*/
/*
                1   2   3
                    4   5
        -   -   -   -   -
                    1   5
                1   0
            0   5
                1   2
            0   8
        0   4
        -   -   -   -   -
            5   5   3   5   
*/
function multiplyStringsOptimized(A, B) {
    var product = [];
    var m = A.length;
    var n = B.length;
    for (var i = 0; i <= m + n; i++) {
        product.push(0);
    }
    var pos = product.length - 1;

    for(var i = m - 1; i >= 0; i--) {
        var tempPos = pos;
        for (var j = n - 1; j >= 0; j--) {
            product[tempPos] += parseInt(A[i]) * parseInt(B[j]);
            console.log(parseInt(A[i]) * parseInt(B[j]))
            // console.log(A[i] + ' ' + B[j])
            product[tempPos-1] += Math.floor(product[tempPos] / 10);
            product[tempPos] %= 10
            tempPos -= 1;
            console.log(product)
        }
        pos -= 1;
    }
    console.log('---------------------------------')
    console.log(product)
    var pt = 0;
    while((pt < product.length - 1) && product[pt] === 0) {
        pt += 1;
    }
    return product.slice(pt).join('')
}

console.log(multiplyStringsOptimized('45', '123'))