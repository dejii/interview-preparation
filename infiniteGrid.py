"""
    You are in an infinite 2D grid where you can move in any of the 8 directions :

    (x,y) to 
    (x+1, y), 
    (x - 1, y), 
    (x, y+1), 
    (x, y-1), 
    (x-1, y-1), 
    (x+1,y+1), 
    (x-1,y+1), 
    (x+1,y-1) 

    You are given a sequence of points and the order in which you need to cover the points. 
    Give the minimum number of steps in which you can achieve it. You start from the first point.

    Given two integer arrays A and B, where A[i] is x coordinate and B[i] is y coordinate of ith point respectively.

    Return an Integer, i.e minimum number of steps.

    Input : [(0, 0), (1, 1), (1, 2)]
    Output : 2

    It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).
"""

def coverPoints(A, B):
    arr = list(zip(A, B))

    s = 0

    for i in range(len(arr) - 1):
        s += steps(arr[i], arr[i + 1])


    return s


a = [1,2,3,4]
b = [5,6,7,8]

def steps(a, b):
    x1, y1 = a
    x2, y2 = b

    x = abs(x2 - x1)
    y = abs(y2-y1)

    return x if x > y else y


if __name__ == "__main__":
    print(coverPoints(a,b))