/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
 (you may want to display this pattern in a fixed font for better legibility)

P.......A........H.......N
..A..P....L....S....I...I....G
....Y.........I........R
And then read line by line: PAHNAPLSIIGYIR
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR"
**Example 2 : **
ABCD, 2 can be written as

A....C
...B....D
and hence the answer would be ACBD.
*/

function zigzagString(A, B) {
    if (B === 1 || B >= A.length) {
        return A
    }

    // create an empty array of strings with the number of rows as length
    var result = [];
    for (var i = 0; i < B; i++) {
        result.push('');
    }

    var index = 0;
    var step = 1;

    for (var i = 0; i < A.length; i++) {
        result[index] += A[i];
        if (index === 0) {
            step = 1;
        } else if (index === (B - 1)) {
            step = -1;
        }

        index += step;
    }

    return result.join('')

}

function zigzagString2(A, B) {
    var result = [];

    for (var i = 0; i < A.length; i++) {
        result.push(0);
    }

    var interval = (2 * B) - 2;
    var count = 0;
    for (var i = 0; i < B; i++) {
        var step = interval - (2 * i)
        for (var j = i; j < A.length; j+=interval) {
            result[count] = A.charAt(j);
            count++
            if (step > 0 && step < interval && j + step < A.length) {
                result[count] = A.charAt(j + step)
                count++
            }
        }
    }

    return result.join('')
}

var a = 'PAYPALISHIRING'
var b = 3
console.log(zigzagString2(a, 3))