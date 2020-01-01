

function singleNumber(A) {
    var res = 0;
        
    for (var i = 0; i < A.length; i++) {
        res = res ^ A[i]
    }
    
    return res
}

console.log(singleNumber([1,1,2,6,2,3,4,3,4]))