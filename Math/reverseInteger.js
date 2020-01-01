/*
    Reverse digits of an integer.

    Example1:

    x = 123,

    return 321
    Example2:

    x = -123,

    return -321

    Return 0 if the result overflows and does not fit in a 32 bit signed integer
*/

function reverseInteger(A) {
    var sign = A < 0 ? -1 : 1
	    
    var reversedNumber = Number(Math.abs(A).toString().split('').reverse().join(''));
    
    if (reversedNumber > ((Math.pow(2, 31)) -1)) {
        return 0
    }
    
    return sign * reversedNumber;

}

function reverseInteger2(A) {
    var sign = A < 0 ? -1 : 1;
    A = Math.abs(A);
    var ans = 0;
    while(A > 0) {
        ans = (ans * 10) + (A % 10);
        A = Math.floor(A / 10)
    }
    return ans > (Math.pow(2, 31) - 1) ? 0 : sign * ans;
} 

var a = -123333;
console.log(reverseInteger2(a))