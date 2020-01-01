class Solution:
    # @param A : list of integers
    # @param B : list of integers
    # @return an integer
    def findGCD(self, a, b):
        if b == 0:
            return a
        else:
            return self.findGCD(b, a % b)

    def maxPoints(self, A, B):
        solution = 0
        points = zip(A, B)
        n = len(points)
        for i in range(n):
            maxx = 0
            overlap = 0
            store = dict()
            for j in range(i + 1, n):
                x1, y1 = points[i]
                x2, y2 = points[j]
                deltaX = x2 - x1
                deltaY = y2 - y1
                if deltaX == 0 and deltaY == 0:
                    overlap += 1
                    continue
                gcd = self.findGCD(deltaX, deltaY)
                dX = deltaX // gcd
                dY = deltaY // gcd
                key = str(dX) + "," + str(dY)
                store[key] = store.get(key, 0) + 1
                maxx = max(maxx, store.get(key))

            solution = max(solution, maxx + overlap + 1)

        return solution
