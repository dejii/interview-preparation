# function findMinNonAdjacentPair(a) {
#     var mins = [];
    
#     // quick exits:
#     if (a.length < 5) return {error: "no solution, too few elements."};
#     if (a.some(isNaN)) return {error: "non-numeric values given."};
    
#     // collect 4 smallest values by their indexes    
#     for (var i = 1; i < a.length - 1; i++) { // O(n)
#         if (mins.length < 4 || a[i] < a[mins[3]]) {
#             // need to keep record of this element in sorted list of 4 elements
#             for (var j = Math.min(mins.length - 1, 2); j >= 0; j--) { // O(1)
#                 if (a[i] >= a[mins[j]]) break;
#                 mins[j+1] = mins[j];
#             }
#             mins[j+1] = i;
#         }
#     }
#     // mins now has the indexes to the 4 smallest values

#     // Find the smallest sum
#     var result = {
#         sum: a[mins[mins.length-1]]*2+1 // large enough
#     }
    
#     for (var j = 0; j < mins.length-1; j++) { // O(1)
#         for (var k = j + 1; k < mins.length; k++) {
#             if (Math.abs(mins[j] - mins[k]) > 1) { // not adjacent
#                 if (result.sum    > a[mins[j]]+a[mins[k]]) {
#                     result.sum    = a[mins[j]]+a[mins[k]];
#                     result.index1 = mins[j];
#                     result.index2 = mins[k];
#                 };
#                 if (k < j + 3) return result; // cannot be improved
#                 break; // exit inner loop: it cannot bring improvement
#             }
#         }
#     }
#     return result;
# }

def solution(A):
    min_vals = []
    
    
    if len(A) < 5 :
        return "no solution, too few elements."
    n = len(A)
    for i in range(1, n - 1):
        if len(min_vals) < 4 or A[i] < A[min_vals[3]]:
            k = min(len(min_vals) - 1, 2)
            while k >= 0
                if(A[i] >= A[min_vals[k]]):
                    break
                min_vals[k+1] = min_vals[k]
                k -=1
            mins[k + 1] = i

     result = {
        "s": A[min_vals[len(min_vals)-1]]*2+1 
    }
    
    m = len(min_vals) - 1
    for (var j = 0; j < mins.length-1; j++) { // O(1)
        for (var k = j + 1; k < mins.length; k++) {
            if (Math.abs(mins[j] - mins[k]) > 1) { // not adjacent
                if (result.sum    > a[mins[j]]+a[mins[k]]) {
                    result.sum    = a[mins[j]]+a[mins[k]];
                    result.index1 = mins[j];
                    result.index2 = mins[k];
                };
                if (k < j + 3) return result; // cannot be improved
                break; // exit inner loop: it cannot bring improvement
            }
        }
    }
    return result;
}