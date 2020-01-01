/*
    Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

    You may assume that the intervals were initially sorted according to their start times.

    Example 1:

    Given intervals [1,3],[6,9] insert and merge [2,5] would result in [1,5],[6,9].

    Example 2:

    Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] would result in [1,2],[3,10],[12,16].

    This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

    Make sure the returned intervals are also sorted.

    https://github.com/anaviltripathi/interviewbit-solutions-python/blob/master/Arrays/Interval.py
*/

function mergeIntervals(A, B) {
    var mergeBegin = B[0];
    var mergeEnd = B[1];
    var indexesToBeRemoved = []
    for (var i = 0; i < A.length; i++) {
        var a1 = A[i][0]
        var b1 = A[i][1]

        if (a1 > mergeEnd) {
            break
        }


        if(mergeEnd < b1) {
            indexesToBeRemoved.push(i)
            continue
        }

        if (mergeBegin < a1 && b1 < mergeEnd) {
            indexesToBeRemoved.push(i)
            continue
        }

        if (mergeBegin > a1 && mergeBegin < b1) {
            indexesToBeRemoved.push(i)
            continue
        }
    }
    var filterRange = indexesToBeRemoved.length > 1 ? [indexesToBeRemoved[0], indexesToBeRemoved[indexesToBeRemoved.length - 1] ] : indexesToBeRemoved[0]

    A = A.filter(function(_, i) {
        return i < filterRange[0] || i > filterRange[1]
    })

    console.log(A)
    return indexesToBeRemoved;
}

var input = [[1,2],[3,5],[6,7],[8,10],[12,16]]
var merge = [4, 9]
// var input = [[1,3],[6,9]]
// var merge = [2,5]
console.log(mergeIntervals(input, merge))