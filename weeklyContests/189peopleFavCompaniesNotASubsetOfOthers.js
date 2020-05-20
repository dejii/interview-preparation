/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
function isSubset(arr, set) {
    for (let c of arr) {
        if (!set.has(c)) return false;
    }
    return true;
}
var peopleIndexes = function (favoriteCompanies) {
    let n = favoriteCompanies.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let comp = favoriteCompanies[i];
        let temp = new Set(comp);
        map.set(i, temp)
    }
    let res = [];
    for (let i = 0; i < n; i++) {
        let comp = favoriteCompanies[i];
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i != j) {

                if (!isSubset(comp, map.get(j))) count++;
            }
        }
        if (count === n - 1) res.push(i);

    }
    return res.sort((x, y) => x - y);
};

