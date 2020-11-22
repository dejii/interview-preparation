def computeMax(blocks, i, n):
    l = i
    r = i
    rightmost = False
    leftmost = False
    while l >= 0 and r < n and (not rightmost or not leftmost):
        if r + 1 < n and blocks[r] <= blocks[r + 1]:
            r += 1
        else:
            rightmost = True

        if l - 1 >= 0 and blocks[l] <= blocks[l - 1]:
            l -= 1
        else:
            leftmost = True

    return r - l + 1


def solution(blocks):
    n = len(blocks)

    max_val = 1
    for i in range(n):
        tmp = computeMax(blocks, i, n)
        max_val = max(max_val, tmp)

    return max_val


blocks = [1, 5, 5, 2, 6]
blocks = [1, 1]
blocks = [2, 6, 8, 5]
blocks = [1] * 5000
print(solution(blocks))

