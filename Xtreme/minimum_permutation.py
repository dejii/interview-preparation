# _ = input().split(" ")
# a = [int(i) for i in input().split(" ")]
# b = [int(i) for i in input().split(" ")]


# def findPermutation(n):

#     res = []

#     # Initial numbers to be pushed to result
#     en, on = 2, 1

#     # If n is even
#     if n % 2 == 0:
#         for i in range(n):
#             if i % 2 == 0:
#                 res.append(en)
#                 en += 2
#             else:
#                 res.append(on)
#                 on += 2

#     # If n is odd
#     else:
#         for i in range(n - 2):
#             if i % 2 == 0:
#                 res.append(en)
#                 en += 2
#             else:
#                 res.append(on)
#                 on += 2

#         res.append(n)
#         res.append(n - 2)
#     res = map(str, res)
#     return res


# def minimum_permutation(a, b):
#     s = a + b
#     n = max(s)
#     return findPermutation(n)


# print(" ".join(minimum_permutation(a, b)))
# _ = input().split(" ")
# a = [int(i) for i in input().split(" ")]
# b = [int(i) for i in input().split(" ")]


# def insert(arr, n):
#     for i in range(len(arr)):
#         if arr[i] > n:
#             arr.insert(i, n)
#             break
#     else:
#         arr.append(n)

#     return arr


# def main(A, B):
#     for b in B:
#         A = insert(A, b)
#     A = map(str, A)
#     print(" ".join(A))


# main(a, b)
# insert([2, 3], 1)

_ = input().split(" ")
A = [int(i) for i in input().split(" ")]
B = [int(i) for i in input().split(" ")]
B = sorted(B)
m = len(A)
n = len(B)
i = 0
j = 0
ans = []
while i < m and j < n:
    if A[i] < B[j]:
        ans.append(A[i])
        i += 1
    else:
        ans.append(B[j])
        j += 1
s = ans + A[i:] + B[j:]
s = map(str, s)
print(" ".join(s))

