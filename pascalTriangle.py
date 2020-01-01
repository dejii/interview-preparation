
def pascalTriangle(A):
    if A < 1:
        return []
    result = [[1]]

    for i in range(1, A):
        start = [1]
        end = [1]
        mid = []
        prev = result[i - 1]
        for j in range(len(prev) - 1):
            mid.append(prev[j] + prev[j + 1])
        r = start + mid + end
        result.append(r)
    return result

print(pascalTriangle(5))