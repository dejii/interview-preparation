
def rotateArray(A, B):
        ret = []
        # if B is greater than the length of the array, get the remainder divided by the length of the array
        # because that's the effective amount of rotations
        # main takeaway is that an array A rotated n times is the same exact array where n = length of array
        if (B > len(A)):
            B %= len(A)

        temp = A[0:B]
        for i in range(len(A) - B):
            ret.append(A[i + B])
        ret.extend(temp)
        return ret
# A = [ 28, 68, 100, 90, 46, 58, 54, 74 ]
A = [1,2,3,4,5,6,7,8]
print(A)
print(rotateArray(A, 2))

# 74 28 68 100 90 46 58 54 
 
"""
    Another solution, not so easy to read
    def rotateArray(self, a, b):
        ret = []
        for i in xrange(len(a)):
            ret.append(a[(i + b) % len(a)])
        return ret
"""