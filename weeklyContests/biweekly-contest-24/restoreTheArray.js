/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function dfs(str, pos, path, result, set, k) {
    if (pos === str.length) {
        result.count++;
        // result.push(path.slice());
        return;
    }

    for (let i = pos; i < str.length; i++) {
        console.log(pos)
        let current = str.slice(pos, i + 1);
        console.log(current)
        if (
            str[pos] !== "0" &&
            parseInt(current) > 1 &&
            parseInt(current) < k
        ) {
            // console.log('df');
            path.push(current);
            dfs(str, i + 1, path, result, set, k);
            path.pop();
        }
    }
}
var numberOfArrays = function (s, k) {
    let result = [];
    dfs(result, [], s)
};
let s = '1317'
let k = 2000
console.log(numberOfArrays(s, k))