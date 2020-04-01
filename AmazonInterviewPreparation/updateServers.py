def minHours(grid):
    n = len(grid)
    m = len(grid[0])

    target = n * m
    count = 0

    from collections import deque

    queue = deque()

    for i in range(n):
        for j in range(m):
            if grid[i][j] == 1:
                queue.append((i, j))
                count += 1

    directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    level = 0

    while len(queue) > 0:

        size = len(queue)
        if count == target:
            return level

        for i in range(size):
            x, y = queue.popleft()

            for dirX, dirY in directions:
                ni = x + dirX
                nj = y + dirY
                if (
                    ni >= 0
                    and ni < len(grid)
                    and nj >= 0
                    and nj < len(grid[0])
                    and grid[ni][nj] == 0
                ):
                    count += 1
                    queue.append((ni, nj))
                    grid[ni][nj] = 1

        level += 1
    return -1


grid = [[0, 1, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1], [0, 1, 0, 0, 0]]
print(minHours(grid))
