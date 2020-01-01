"""
Given a N cross M matrix in which each row is sorted, 
find the overall median of the matrix. Assume N*M is odd.

For example,

Matrix=
[1, 3, 5]
[2, 6, 9]
[3, 6, 9]

A = [1, 2, 3, 3, 5, 6, 6, 9, 9]

Median is 5. So, we return 5.
Note: No extra memory is allowed.


"""


from bisect import bisect_right as upper_bound

"""
Algorithm:

First we find the minimum and maximum elements in the matrix. Minimum element can be easily found by
 comparing the first element of each row, and similarly the maximum element can be found by comparing 
 the last element of each row.
Then we use binary search on our range of numbers from minimum to maximum, we find the mid of the 
min and max, and get count of numbers less than our mid. And accordingly change the min or max.
For a number to be median, there should be (r*c)/2 numbers smaller than that number. So for every 
number, we get the count of numbers less than that by using upper_bound() in each row of matrix, if it 
is less than the required count, the median must be greater than the selected number, else the median must 
be less than or equal to the selected number.
"""

def matrixMedian(A):
    m = A
    r = len(A)
    d = len(A[0])
    mi = m[0][0] 
    mx = 0
    for i in range(r): 
        if m[i][0] < mi: 
            mi = m[i][0] 
        if m[i][d-1] > mx : 
            mx =  m[i][d-1] 
        
    desired = (r * d + 1) // 2
        
    while (mi < mx): 
        mid = mi + (mx - mi) // 2
        place = [0]
        print('{} < {} |'.format(mi, mx), end= ' ')
            
        # Find count of elements smaller than mid 
        for i in range(r): 
                j = upper_bound(m[i], mid) 
                print('insertion point -> {} |'.format(j), end=' ')
                place[0] = place[0] + j 
                print('place[0] at {} -> {} '.format(j, place[0]), end= ' ')
        print('\n place < desired -> {} < {}'.format(place[0], desired))
        if place[0] < desired: 
            mi = mid + 1
        else: 
            mx = mid 
        print('\n')
    return mi

a = [
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]
]
print(matrixMedian(a))