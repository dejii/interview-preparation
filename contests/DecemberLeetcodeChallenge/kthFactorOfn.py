def kthFactor(n, k):
    from math import sqrt, ceil

    mid = ceil(sqrt(n))
    start_factors = []
    end_factors = []
    seen = set()
    for i in range(1, mid + 1):
        if n % i == 0:
            if i not in seen:
                start_factors.append(i)
            seen.add(i)
            end = n // i
            print(i, end)

            if end not in seen:
                end_factors.append(n // i)
                seen.add(end)

    end_factors.reverse()
    arr = start_factors + end_factors

    if k > len(arr):
        return -1

    return arr[k - 1]


print(kthFactor(420, 25))

# 1, 2, 3, 4, 5, 6, 7, 10, 12, 14, 15, 20, 21, 28, 30, 35, 42, 60, 70, 84, 105, 140, 210, 420.
