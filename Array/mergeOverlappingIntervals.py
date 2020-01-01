class Interval:
    def __init__(self, start=0, end=0):
        self.start = start
        self.end = end

    def toArray(self):
        return [self.start, self.end]


def mergeOverlappingIntervals(A):
    A = sorted(A)
    n = len(A)

    stack = []
    stack.append(A[0])
    for i in range(1, n):
        top = stack[-1]  # top of stack
        if top.end < A[i].start:
            stack.append(A[i])
        elif top.end < A[i].end:
            top.end = A[i].end
            stack.pop()
            stack.append(top)

    return stack


# a = [[1, 3], [5, 7], [6, 8], [2, 4]]
a = [Interval(1, 3), Interval(5, 7), Interval(6, 8), Interval(2, 4)]
print(mergeOverlappingIntervals(a))

"""
    [[1,3],[5,7], [6,8], [2,4]]

    [[1,3],[2,4],[5,7],[6,8]]




"""
