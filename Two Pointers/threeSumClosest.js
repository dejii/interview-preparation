

function threeSumClosest(A, B) {
    A = A.sort(function (x,y) {
        return x - y;
    });
    var min = Infinity;
    var res = -1;
    
    for (var i = 0; i < A.length - 2; i++) {
         
        
        var j = i + 1;
        var k = A.length - 1;
        while (j < k) {
            var currentSum = (A[i] + A[j] + A[k]);
            
            if (Math.abs(B - currentSum) < min) {
                min = Math.abs(B - currentSum);
                res = currentSum;
            }
            
            if (currentSum === B) {
                return B
            } else if (currentSum > B) {
                k -= 1;
            } else {
                j +=1
            }
        }
    }
    return res;
}
a = [-1, 2, 1, -4]
b = 1;
console.log(threeSumClosest(a,b))