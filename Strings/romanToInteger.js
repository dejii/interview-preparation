/*

*/

function romanToInteger(A) {
    var store = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    var unique = {
        'IV': 4,
        'IX': 9
    }
    
    var i = 0;
    var n = A.length
    result = 0
    var count = 0;
    while(i < n) {
        // if ((i + 1) < n && unique.hasOwnProperty(A[i]+A[i+1])) {
        //     console.log(A[i] + A[i+1])
        //     count += unique[A[i] + A[i+1]]
        //     i += 2
        // } else {
        //     console.log(A[i])
        //     count += store[A[i]]
        //     i++
        // }

        if ((i + 1) < n && store[A[i]] < store[A[i+1]]) {
            count -= store[A[i]]
        } else {
            count += store[A[i]]
        }
        i++
    }
    
    return count
}

var a = 'MDCCCIV'
console.log(romanToInteger(a))