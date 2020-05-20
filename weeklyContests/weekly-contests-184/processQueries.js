/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
    let p = [];
    for (let i = 1; i <= m; i++) {
        p.push(i);
    }
    let res = [];
    for (let q of queries) {
        let n = p.indexOf(q);
        res.push(n);
        p = [p[n]].concat(p.slice(0, n)).concat(p.slice(n + 1));
    }
    return res;

};
let queries = [3, 1, 2, 1];
let m = 5
// queries = [4, 1, 2, 2];
// m = 4
// queries = [7, 5, 5, 8, 3]
// m = 8
console.log(processQueries(queries, m))