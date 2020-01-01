

const plusOne_ = (A) => {
    let num = Number(A.join('')) + 1;

    const sum = add(A.join(''), '1')

    // return num.toString().split('').map(Number);
    return Number(sum).toString().split('').map(Number);
};


const plusOne = (A) => {
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        sum += returnNumberInTens(A[i], i, A.length);
    }

    sum += 1;

    console.log(sum);

    return Number(sum).toString().split('').map(Number);

};

const returnNumberInTens = (num, index, length) => {
    const diff = length - index;
    if (diff > 0) {
        for (let i = 1; i < diff; i++) {
            num = num.toString() + '0';
        }
    }

    return Number(num)
}

a = [2,4,5,5,6,4,5,5,6,4,5,5,6,4,5,5,6,4,5,5,6,4,5,5,6,4,5,5,6,4,5,5,6];



// console.log(plusOne_(a))
console.log(add('0','1'))

// console.log(returnNumberInTens(5,3, 4));

function add(str1, str2) {

    var sum = "";  // our result will be stored in a string.

    // we'll need these in the program many times.
    var str1Length = str1.length;
    var str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        var temp = str2;
        str2 = str1;
        str1 = temp;
    }

    var carry = 0;  // number that is carried to next decimal place, initially zero.
    var a;
    var b;
    var temp;
    var digitSum;
    for (var i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
        b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
        b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1);            //
        carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum;     // return sum

}