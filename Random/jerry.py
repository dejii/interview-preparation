def solution(s):

    arr = []
    seen = set()
    n = len(s)
    for i in range(n):
        for j in range(i, n):
            val = s[i : j + 1]
            if val not in seen:
                arr.append(val)
                seen.add(val)

    arr = sorted(arr)
    print(arr)
    return arr[-1]


print(solution("baca"))

