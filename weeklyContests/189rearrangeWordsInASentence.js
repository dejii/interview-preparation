/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
    let texts = text.toLowerCase().split(' ');
    let map = new Map();
    let arr = [];
    for (let txt of texts) {
        let len = txt.length;
        if (!map.has(len)) {
            map.set(len, 1);
        } else {
            map.set(len, map.get(len) + 1);
        }
        arr.push([len, map.get(len), txt]);
    }

    arr.sort((x, y) => {
        if (x[0] === y[0]) {
            return x[1] - y[1];
        }
        return x[0] - y[0];
    });
    let result = arr.map((x, i) => {
        let s = x[2];
        if (i === 0) {
            return s.substring(0, 1).toUpperCase() + s.substring(1);
        }
        return s;
    });
    return result.join(' ');
};