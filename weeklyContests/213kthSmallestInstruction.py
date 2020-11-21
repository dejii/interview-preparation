def dfs(i, j, grid, n, m, path, res, destination, val):
    if i >= n or j >= m:
        return
    path.append(val)
    grid[i][j] = True
    if i == destination[0] and j == destination[1]:
        res.append("".join(path))
    else:
        if i < n and j + 1 < m and not grid[i][j + 1]:
            dfs(i, j + 1, grid, n, m, path, res, destination, "H")
        if i + 1 < n and j < m and not grid[i + 1][j]:
            dfs(i + 1, j, grid, n, m, path, res, destination, "V")

    path.pop()
    grid[i][j] = False


def kthSmallestPath(destination, k):
    n, m = destination
    n += 1
    m += 1
    grid = []
    for _ in range(n):
        temp = [0] * m
        grid.append(temp)

    res = []

    dfs(0, 0, grid, n, m, [], res, destination, "")
    print(res)
    res = sorted(res)
    return res[k - 1]


destination = [2, 3]
k = 1

destination = [15, 15]
k = 155117520
print(kthSmallestPath(destination, k))
