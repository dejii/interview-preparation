/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address must be in the form of A.B.C.D, where A,B,C and D are numbers from 0-255. 
The numbers cannot be 0 prefixed unless they are 0.

Example:

Given “25525511135”,

return [“255.255.11.135”, “255.255.111.35”]. (Make sure the returned strings are sorted in order)
*/

/*

*/

function validIpAddress(A) {
    function isValid(s) {
        if (s.length > 3 || s.length == 0 || (s.charAt(0) === '0' && s.length > 1) || parseInt(s) > 255 ) {
            return false;
        }
        return true;
    }
    var result = [];
    var len = A.length;
    for (var i = 1; i < 4 && i < len - 2; i++ ) {
        for (var j = i + 1; j < i + 4 && j < len - 1; j++ ) {
            for (var k = j + 1; k < j+ 4 && k < len; k++ ) {
                var s1 = A.substring(0,i)
                var s2 = A.substring(i,j)
                var s3 = A.substring(j,k)
                var s4 = A.substring(k,len)
                // console.log(s1,s2,s3,s4)
                if (isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)) {
                    result.push(s1 + '.' + s2 + '.' + s3 + '.' + s4)
                }
            }
        }
    }

    return result

}

var a = '25525511135'
console.log(validIpAddress(a))