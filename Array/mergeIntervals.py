"""
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Given intervals [1,3],[6,9] insert and merge [2,5] would result in [1,5],[6,9].

Example 2:

Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] would result in [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

Make sure the returned intervals are also sorted.
"""

"""
Approach :
Let the new interval to be inserted is : [a, b]
Case 1 : b < (starting time of first interval in set)
In this case simply insert new interval at the beginning of the set.

Case 2 : (ending value of last interval in set) < a
In this case simply insert new interval at the end of the set.

Case 3 : a ≤ (starting value of first interval) and b ≥ (ending value of last interval)
In this case the new interval overlaps with all the intervals, i.e., it contains all the intervals. So the final answer is the new interval itself.

Case 4 : The new interval does not overlap with any interval in the set and falls between any two intervals in the set
In this case simply insert the interval in the correct position in the set. A sample test case for this is :

Input : Set : [1, 2], [6, 9]
        New interval : [3, 5]
Output : [1, 2], [3, 5], [6, 9]
Case 5 : The new interval overlaps with the interval(s) of the set.
In this case simply merge the new interval with overlapping intervals. To have a better understanding of how to merge overlapping intervals, refer this post : Merge Overlapping Intervals
Example 2 of sample test cases above cover this case.
"""


class Interval:
    def __init__(self, start=0, end=0):
        self.start = start
        self.end = end

    def toArray(self):
        return [self.start, self.end]


def mergeIntervals(intervals, newInterval):
    def doesOverlap(a, b):
        return min(a.end, b.end) >= max(a.start, b.start)

    result = []
    n = len(intervals)
    # if list is empty, simply return the new interval
    if n == 0:
        result.append(newInterval)
        return result

    # Case 1 and Case 2 (new interval to be
    # inserted at corners)
    if newInterval.end < intervals[0].start or newInterval.start > intervals[n - 1].end:
        if newInterval.end < intervals[0].start:
            result.append(newInterval)

        for i in range(n):
            result.append(intervals[i])

        if newInterval.start > intervals[n - 1].end:
            result.append(newInterval)

        return result

    # Case 3 (New interval covers all existing)
    if (
        newInterval.start <= intervals[0].start
        and newInterval.end >= intervals[n - 1].end
    ):
        result.append(newInterval)
        return result

    overlap = True
    i = 0
    # for i in range(n):
    while i < n:
        # print(intervals[i].toArray())
        # print(i)

        overlap = doesOverlap(intervals[i], newInterval)
        # print(overlap)

        if not overlap:
            result.append(intervals[i])
            # print(i)

            # Case 4 : To check if given interval
            # lies between two intervals.
            if (
                i < n
                and newInterval.start > intervals[i].end
                and newInterval.end < intervals[i + 1].start
            ):
                result.append(newInterval)
            i += 1
            continue

        # Case 5 : Merge Overlapping Intervals.
        # Starting time of new merged interval is
        # minimum of starting time of both
        # overlapping intervals.
        temp = Interval()
        temp.start = min(newInterval.start, intervals[i].start)
        # Traverse the set until intervals are
        # overlapping
        while i < n and overlap:
            print(i)
            # Ending time of new merged interval
            # is maximum of ending time both
            # overlapping intervals.
            temp.end = max(newInterval.end, intervals[i].end)
            if i == (n - 1):
                overlap = False
            else:
                overlap = doesOverlap(intervals[i + 1], newInterval)
            # overlap = doesOverlap(intervals[i+1], newInterval)
            i += 1
            # print(i)
            # print(temp.toArray())

        # i-=1
        result.append(temp)
        # print(temp.toArray())
        # i +=1
    return [t.toArray() for t in result]


# a = [Interval(1,3), Interval(6,9)]
a = [Interval(1, 2), Interval(3, 5), Interval(6, 7), Interval(8, 10), Interval(12, 16)]
print([t.toArray() for t in a])
# interval = Interval(2,5)
interval = Interval(4, 9)
print(mergeIntervals(a, interval))

