/*
Compare two version numbers version1 and version2.

If version1 > version2 return 1,
If version1 < version2 return -1,
otherwise return 0.
You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 1.13 < 1.13.4
*/

function compareVersionNumbers(A) {

    // var versionOne = A.split('.')
    // var versionTwo = B.split('.')
    // var minLength = Math.min(versionOne.length, B.length)
    // // 1.13 < 1.13.4
    // var i = 0;
    // while (i < minLength) {
    //     const n = Math.max(versionOne[i].length, versionTwo[i].length);
    //     var a = parseInt(versionOne[i]) * n
    //     var b = parseInt(versionTwo[i]) * n
    //     if (a === b) {
    //         i++
    //     } else if (a < b) {
    //         return -1
    //     } else {
    //         return 1
    //     }
    // }
    
    // if (i === versionOne.length && i === versionTwo.length) {
    //     return 0
    // }
    
    // if (i < versionOne.length) {
    //     if (parseInt(versionOne[i]) === 0) {
    //         return 0
    //     }
        
    //     return 1
    // }
    
    // if (i < versionTwo.length) {
    //     if (parseInt(versionTwo[i]) === 0) {
    //         return 0
    //     }
    //     return -1
    // }

}

function compareVersionNumbers2(A, B) {
    var versionOne = A.split('.').map(function (v) {return parseInt(v)});
    var versionTwo = B.split('.').map(function (v) {return parseInt(v)});
    // console.log(versionOne,versionTwo)
    var maxLength = Math.max(versionOne.length, versionTwo.length)
    
    for (var i = 0; i < maxLength; i++) {
        var v1 = i < versionOne.length ? versionOne[i] : 0;
        var v2 = i < versionTwo.length ? versionTwo[i] : 0;
        console.log(v1,v2)
        
        if (v1 > v2) {
            return 1
        } else if (v1 < v2) {
            return -1
        }
    }
    
    return 0
}

var a = "13.0"
var b = "13.0.8"
console.log(compareVersionNumbers2(a,b))