"""
Good morning! Here's your coding interview problem for today.

Given a 2-D matrix representing an image, a location of a pixel in the screen and a color C, replace the color of the given pixel and all adjacent same colored pixels with C.

For example, given the following matrix, and location pixel of (2, 2), and 'G' for green:

B B W
W W W
W W W
B B B
Becomes

B B G
G G G
G G G
B B B
"""


def fill_pixels(matrix, r, c, color):
    n = len(matrix)
    m = len(matrix[0])

    target = matrix[r][c]
    queue = []
    queue.append((r, c))
    dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
    while queue:
        size = len(queue)
        for _ in range(size):
            x, y = queue.pop(0)
            for j, k in dirs:
                ni = x + j
                nj = y + k

                if ni < n and nj < m and matrix[ni][nj] == target:
                    matrix[ni][nj] = color
                    queue.append((ni, nj))

    return matrix


m = [["B", "B", "W"], ["W", "W", "W"], ["B", "W", "W"], ["W", "B", "B"]]
r = 2
c = 2
print(fill_pixels(m, r, c, "G"))
