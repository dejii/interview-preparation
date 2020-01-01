import math

# N, A, B = [int(i) for i in input().split(" ")]
# N, A, B = 59, 8, 10
# N, A, B = 16, 4, 6
N, A, B = 53, 6, 9
# N, A, B = 4, 2, 3

res = []
while B >= A:
    n = math.ceil(N / B)
    # arr = [B] * n
    total = B * n
    diff = total - N
    rm = diff % A
    temp = B - rm
    if temp >= A:
        diff -= rm
        ans = [B] * n
        ans[0] = temp
        if sum(ans) == N:
            res.append(ans)
        else:
            if diff <= len(ans):
                for i in range(diff):
                    if ans[i] - 1 >= A:
                        ans[i] -= 1
                if sum(ans) == N:
                    res.append(ans)
        break
        # res.append(arr)
    else:
        i = 0
        arr = [B] * n
        if diff <= len(arr):
            for i in range(diff):
                if arr[i] - 1 >= A:
                    arr[i] -= 1
        if sum(arr) == N:
            res.append(arr)
            break

    B -= 1

if len(res) > 0:
    print("YES")
    s = map(str, res[0])
    print(" ".join(s))
else:
    print("NO")

