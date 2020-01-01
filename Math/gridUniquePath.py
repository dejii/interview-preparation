

def gridUniquePath(A, B):
    mat = [[1] * B] * A
    print(mat)
    for i in range(1, A):
        for j in range(1, B):
            mat[i][j] = mat[i - 1][j] + mat[i][j - 1]

    print(mat)

    return mat[-1][-1]

print(gridUniquePath(2,2))