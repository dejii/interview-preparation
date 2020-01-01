

function amazingSubArray(A) {
    var result = [];
    var vowelIndex = 0;
    var lastIndex = 0;
    var store = {
        'a': 'a',
        'e': 'e',
        'i': 'i',
        'o': 'o',
        'u': 'u',
        'A': 'A',
        'E': 'E',
        'I': 'I',
        'O': 'O',
        'U': 'U'
    }
    var n = A.length
    var count = 0;
    
    for (var i = 0; i < n; i++) {
        if (store.hasOwnProperty(A[i])) {
            vowelIndex = i
            lastIndex = i + 1
            count += n - i
            // while(lastIndex < n + 1) {
            //     result.push(A.slice(vowelIndex, lastIndex))
            //     lastIndex++
            // }
        }
    }
    
    // return result.length;
    return count;
}

var a = 'ABEC'

console.log(amazingSubArray(a))