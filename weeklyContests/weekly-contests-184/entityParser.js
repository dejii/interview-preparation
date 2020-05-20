/**
 * @param {string} text
 * @return {string}
 */
function getValue(key) {
    if (key === '&quot;') {
        return '"'
    } else if (key === '&apos;') {
        return "'";
    } else if (key === '&amp;') {
        return '&';
    } else if (key === '&gt;') {
        return '>';
    } else if (key === '&lt;') {
        return '<';
    } else if (key === '&frasl;') {
        return '/'
    } else {
        return '';
    }
}
var entityParser = function (text) {
    let arr = [];
    for (let i = 0; i < text.length;) {
        let s = text[i];
        if (s === '&' && i + 1 < text.length) {
            let j = i + 1;

            while (text[j] !== ';' && j < text.length) {
                j++;
            }
            let ch = text.substring(i, j + 1);
            let temp = getValue(ch);
            if (temp !== '') {
                arr.push(temp);
            } else {
                arr.push(ch);
            }
            i = j + 1;
        } else {
            arr.push(s);
            i++;
        }
    }
    return arr.join('');
};
let text = "x &gt; y &amp;&amp; x &lt; y is always false"
text = "leetcode.com&frasl;problemset&frasl;all"
text = "&amp; is an HTML entity but &ambassador; is not."
text = "and I quote: &quot;...&quot;"
text = "Stay home! Practice on Leetcode :)"
console.log(entityParser(text))