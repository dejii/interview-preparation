# N, K = [int(i) for i in input().split(" ")]
N, K = [5, 5]
# A = [int(i) for i in input().split(" ")]
A = [4, 8, 12, 16, 18]
import math

n = len(A)
summ = sum(A)
# def gcd(arr):


def find_gcd(x, y):
    while y:
        x, y = y, x % y

    return x


s = set(A)
# for i in range(0, N, K):

#     j = i + 1
#     k = i + K if (i + K) < N - 1 else N - 1
#     while j < k:
#         # print('{} -> {}'.format(A[i], A[j]))
#         # print("{} -> {}".format(A[j], A[k]))
#         # print('{} -> {}'.format(A[i], A[k]))
#         s.add(math.gcd(A[i], A[j]))
#         s.add(math.gcd(A[j], A[k]))
#         s.add(math.gcd(A[i], A[k]))
#         j += 1
#         k -= 1

# print(s)
# print(len(s))

A = sorted(A)
i = 0
j = len(A) - 1
while i < j:
    k = i
    while k < j:
        s.add(math.gcd(A[j], A[k]))
        k += 1
    j -= 1

print(s)

