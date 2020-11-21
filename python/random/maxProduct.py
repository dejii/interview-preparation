def helper(i, j, n, m, matrix, dp):
    if i >= n or j >= m:
        return

    if i == 0:
        dp[i][j] = matrix[i][j] * dp[i][j - 1]
    elif j == 0:
        dp[i][j] = matrix[i][j] * dp[i - 1][j]
    else:
        dp[i][j] = max(matrix[i][j] * dp[i][j - 1], matrix[i][j] * dp[i - 1][j])
    print(i, j, dp[i][j])
    helper(i, j + 1, n, m, matrix, dp)
    helper(i + 1, j, n, m, matrix, dp)


def solution(matrix):
    n = len(matrix)
    m = len(matrix[0])
    dp = []
    for _ in range(n):
        dp.append([0] * m)
    dp[0][0] = matrix[0][0]
    helper(0, 1, n, m, matrix, dp)
    helper(1, 0, n, m, matrix, dp)

    return dp[n - 1][m - 1]


m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(solution(m))
