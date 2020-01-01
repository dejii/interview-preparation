"""
Print concentric rectangular pattern in a 2d matrix. 
Let us show you some examples to clarify what we mean.

Example 1:

Input: A = 4.
Output:

4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 
Example 2:

Input: A = 3.
Output:

3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3 
The outermost rectangle is formed by A, then the next outermost is formed by A-1 and so on.

You will be given A as an argument to the function you need to implement, and you need to return a 2D array.
"""

def solution(A):
    # length = breadth
    l = A * 2 - 1 

    result = [[0] * l for i in range(l)]

    # traverse the matrix in a circular route and print the number down to one
    T = 0 # top
    B = l - 1 #bottom
    L = 0 # left
    R = l - 1 #right
    direction = 0 # initial direction

    # traverse left to right - 0, top to bottom -1, right to left-2, bottom to top-3

    while(T <= B and L <= R):
        if direction == 0:
            for i in range(L, R+1):
                result[T][i] = A
            direction = 1
            T+=1
        if direction == 1:
            for i in range(T, B+1):
                result[i][R] = A
            R-=1
            direction = 2
        if direction == 2:
            for i in range(R, L-1,-1):
                result[B][i] = A
            B-=1
            direction = 3
        if direction == 3:
            for i in range(B, T-1, -1):
                result[i][L] = A
            L+=1
            direction = 0
        A-=1

    

    return result

a = 6
print(solution(a))