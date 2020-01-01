/*
    Given a list of non negative integers, arrange them such that they form the largest number.

    For example:

    Given [3, 30, 34, 5, 9], the largest formed number is 9534330.

    Note: The result may be very large, so you need to return a string instead of an integer.
*/


/* 
    Given two numbers X and Y, how should myCompare() decide which number to put first –
     we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y).
      If XY is larger, then X should come before Y in output, else Y should come before. For example,
       let X and Y be 542 and 60. To compare X and Y, we compare 54260 and 60542. Since 60542 is greater 
       than 54260, we put Y first.
*/
function largestNumber(A) {

    A = A.sort(function (a, b) {
        var ab = String(a) + String(b);
        var ba = String(b) + String(a);
        if (Number(ba) > Number(ab)) {
            return 1
        } else if (Number(ba) === Number(ab)) {
            return 0
        } else {
            return -1
        }
    });
    console.log(A)

    return A.join('');

}

console.log([].concat([]).join(''))
var input = [3, 30, 34, 5, 9];
// var input = [12, 121]
console.log(largestNumber(input))