
function maxNonNegativeArray(A) {
    var maxSub = []
    var maxSum = -1
    var currSub = []
    var currSum = 0

    for (var i = 0; i < A.length; i++) {
        if (A[i] >= 0) {
            currSum += A[i]
            currSub.push({
                index: i,
                value: A[i]
            })
        } else {
            currSub = []
            currSum = 0
        }

        if (currSum > maxSum) {
            maxSub = currSub
            maxSum = currSum
        } else if (currSum === maxSum) {
            /*
            NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
            NOTE 2: If there is still a tie, then return the segment with minimum starting index
            */
            if (currSub.length > maxSub.length) {
                maxSub = currSub
                maxSum = currSum
            } else if(currSub.length === maxSub.length) {
                if (currSub[0] && maxSub[0] && currSub[0].index < maxSub[0].index) {
                    maxSub = currSub
                    maxSum = currSum
                }
            }
        }
        console.log('current sub at ' + i + ' ' + JSON.stringify(currSub))
        console.log('max sub at ' + i + ' ' + JSON.stringify(maxSub))
    }

    return maxSub.map(function(c) {
        return c.value
    })

}

// var a = [1, 2, 5, -7, 2, 3]
var a = [ 0, 0, -1, 0 ]
console.log(maxNonNegativeArray(a))