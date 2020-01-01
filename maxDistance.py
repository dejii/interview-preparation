"""
    Given an array A of integers, find the maximum of j - i subjected to the constraint of A[i] <= A[j].

    If there is no solution possible, return -1.

    Example :

    A : [3 5 4 2]

    Output : 2 
    for the pair (3, 4)
"""
def maxDistance(A):
    # -> using [3 5 4 2]
    n = len(A) # 4
    if len(A) == 1: return 0
    Lmin = [0]*n # [0,0,0,0] 
    Rmax = [0]*n # [0,0,0,0]
    Lmin[0] = A[0] #[3,0,0,0]
    for i in range(1,n):
        Lmin[i] = min(Lmin[i-1],A[i])
    # [3,3,3,2]
    Rmax[n-1] = A[n-1] # [0,0,0,2]
    for i in range(n-2,-1,-1):
        Rmax[i] = max(Rmax[i+1],A[i])
    # [3,5,4,2]
    i = 0
    j = 0
    ret = -1
    # if n == 1:
    #     return ret
    # Lmin [3,3,3,2] Rmax [3,5,4,2]
    while i < n and j < n:
        if Lmin[i] <= Rmax[j]:
            ret = max(ret, j-i)
            j += 1
        else:
            i += 1
    return ret
# -1, -1, 1, 2

a = [3,5,4,2]
# a = [-1,-1,2]
# a = [ 100, 100, 100, 100, 100 ]
print(maxDistance(a))