class Solution:
    def clear(self, grid, i, j, n, m):
        # stop conditions
        if i < 0 or i >= n or j < 0 or j >= m or grid[i][j] == "0":
            return

        # set this position as 0 then continue searching for adjacent locations
        grid[i][j] = "0"

        self.clear(grid, i + 1, j, n, m)
        self.clear(grid, i - 1, j, n, m)
        self.clear(grid, i, j + 1, n, m)
        self.clear(grid, i, j - 1, n, m)

    def numIslands(self, grid: List[List[str]]) -> int:

        # sanity check
        if not grid or len(grid) == 0:
            return 0

        count = 0
        n, m = len(grid), len(grid[0])

        for i in range(n):
            for j in range(m):
                if grid[i][j] == "1":
                    self.clear(grid, i, j, n, m)
                    count += 1

        return count

