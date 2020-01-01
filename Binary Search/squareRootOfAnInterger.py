


def squareRootOfAnInteger(A):
    if A == 0 or A == 1:
        return A

    # Do Binary Search for floor(sqrt(x)) 
    start = 1
    end = A
    while start <= end:
        mid = (start + end) // 2
        print(start, end)
        print(mid)

        if (mid*mid == A):
            return mid
        # Since we need floor, we update  
        # answer when mid*mid is smaller 
        # than x, and move closer to sqrt(x) 
        if (mid * mid < A) : 
            start = mid + 1
            ans = mid 
                
        else : 
                
            # If mid*mid is greater than x 
            end = mid-1
    return ans

a = 11
print(squareRootOfAnInteger(a))