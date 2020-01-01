# c = [
#     [1, 2, 3, 5],
#     [4, 5, 6, 8],
#     [7, 8, 9, 3],
#     [4, 5, 6, 8]
# ]

c = [   
        [5, 7, 6],
        [1, 5, 6]
    ]

def printSpiral(A):
    """
        m = no of rows
        n = no of cols
        T = topmost row, B = Last row
        L = first column, R = last column
        dir = direction | 0 => left - right | 1 => top - bottom | 2 => right - left | 3 bottom - top
    """
    m = len(A)
    n = len(A[0])
    T = 0
    B = m - 1
    L = 0
    R = n - 1
    dir = 0

    result = []

    while (T <= B and L <= R):
        if (dir == 0):
            for i in range(L, R + 1):
                result.append(A[T][i])
            T+=1
        elif (dir == 1):
            for i in range(T, B + 1):
                result.append(A[i][R])
            R-=1
        elif (dir == 2):
            for i in range(R, L - 1, -1):
                result.append(A[B][i])
            B-=1
        elif (dir == 3):
            for i in range(B, T - 1, -1):
                result.append(A[i][L])
            L+=1
        dir = (dir + 1) % 4

    return result

if __name__ == "__main__":
    print(printSpiral(c))