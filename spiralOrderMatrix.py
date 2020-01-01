

def spiralOrderMatrix(A):
    # generate the list
    n = A
    ret = []
    for i in range(n):
        ret.append([0]*n)
    
    T = 0
    B = n-1
    L = 0
    R = n-1
    direction = 0
    num = 1
    while T <=B and L <=R:
        if direction == 0:
            for i in range(L,R+1):
                ret[T][i] = num
                num += 1
            T += 1
            direction = 1
        elif direction == 1:
            for i in range(T,B+1):
                ret[i][R] = num
                num += 1
            R -= 1
            direction = 2
        elif direction == 2:
            for i in range(R,L-1,-1):
                ret[B][i] = num
                num += 1
            B -= 1
            direction = 3
        else:
            for i in range(B,T-1,-1):
                ret[i][L] = num
                num += 1
            L += 1
            direction = 0
    return ret


a = 3
print(spiralOrderMatrix(a))

"""
    1,2,3,4,5,6,7,8,9
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]

        0 1 2
        3 4 5 
        6 7 8

        00 01 02
        10 11 12
        20 21 22
    ]
"""