/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let s = [];
    let t = [];
    for (const ch of S) {
        if (ch === '#') {
            if (s.length > 0) s.pop();
        } else {
            s.push(ch);
        }
    }
    for (const ch of T) {
        if (ch === '#') {
            if (t.length > 0) t.pop();
        } else {
            t.push(ch);
        }
    }
    return s.join('') === t.join('');
};