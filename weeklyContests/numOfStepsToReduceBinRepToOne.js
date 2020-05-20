/**
 * @param {string} s
 * @return {number}
 */
var addBinary = function (a, b) {
    let n = Math.max(a.length, b.length) + 1;
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(0);
    }
    let i = a.length - 1;
    let j = b.length - 1;
    let p = n - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let m = i >= 0 ? a.charCodeAt(i) - "0".charCodeAt(0) : 0;
        let n = j >= 0 ? b.charCodeAt(j) - "0".charCodeAt(0) : 0;
        let sum = m + n + carry;
        carry = Math.floor(sum / 2);
        res[p] = sum % 2;
        i--;
        j--;
        p--;
    }
    if (carry !== 0) {
        res[p] = 1;
    } else {
        res.shift();
    }
    return res.join("");
};

var numSteps = function (s) {
    let count = 0;
    while (s !== '1') {
        let n = s.length - 1;
        if (s.charAt(n) === '0') {
            s = s.substring(0, n);
            console.log(s);
        } else {
            s = addBinary(s, '1');
        }
        count++;
    }
    return count;
};

console.log(numSteps('1101'));