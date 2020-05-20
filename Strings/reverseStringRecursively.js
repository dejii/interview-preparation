/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var helper = function (arr, index, mid, n) {
    if (index === mid) {
        return
    }
    let temp = arr[n - index - 1];
    arr[n - index - 1] = arr[index];
    arr[index] = temp;
    helper(arr, index + 1, mid, n);
}
var reverseString = function (s) {
    let n = s.length;
    let mid = Math.floor(n / 2);
    helper(s, 0, mid, n);
};