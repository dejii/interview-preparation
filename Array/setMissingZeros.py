"""
Given an m x n matrix of 0s and 1s, if an element is 0, set its entire row and column to 0.

Do it in place.

Example

Given array A as

1 0 1
1 1 1 
1 1 1
On returning, the array A should be :

0 0 0
1 0 1
1 0 1
Note that this will be evaluated on the extra memory used. Try to minimize the space and time complexity.
"""

def setMatrixZeros(A):
    n = len(A) # row length
    m = len(A[0]) #column length
    isFirstRowZero = False
    # check whether the 1st row contains a zero
    for j in range(m):
        if A[0][j] == 0:
            isFirstRowZero = True
    # check the remaining matrix
    # -> use the first row to indicate the whole column would be a zero
    # -> use the first column in each row to indicate is the whole row would be a zero
    for i in range(1, n):
        for j in range(m):
            if A[i][j] == 0:
                A[i][0] = 0 # -> use the first column in each row to indicate is the whole row would be a zero
                A[0][j] = 0 # -> use the first row to indicate the whole column would be a zero
    
    # check the first column in each row for a zero and replace the whole row with the zero
    for i in range(1, n):
        if A[i][0] == 0:
            for j in range(m):
                A[i][j] = 0
    # check the first row for zero values and replace the whole column
    for j in range(m):
        if A[0][j] == 0:
            for i in range(1,n):
                A[i][j] = 0
                
    # if the first row has a zero, replace the row
    if isFirstRowZero:
        for i in range(m):
            A[0][i] = 0
    return A

a = [
#   [1, 1],
#   [0, 0]
    [0, 1],
    [1, 1]
]

print(setMatrixZeros(a))