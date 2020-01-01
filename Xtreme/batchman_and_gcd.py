# N, K = [int(i) for i in input().split(" ")]

# A = [int(i) for i in input().split(" ")]

N, K = [5, 5]
A = [4, 8, 12, 16, 18]
summ = sum(A)

n = len(A)
# def gcd(arr):


def find_gcd(x, y):
    while y:
        x, y = y, x % y

    return x


def ncsub(seq, s=0):
    if seq:
        x = seq[:1]
        xs = seq[1:]
        p2 = s % 2
        p1 = not p2
        return [x + ys for ys in ncsub(xs, s + p1)] + ncsub(xs, s + p2)
    else:
        return [[]] if s >= 3 else []


s = set(A)
# for i in range(n):
#     for j in range(i + 1, n):
#         if (j - i) <= K:
#             x = ncsub(A[i : j + 1])
#             for p in x:
#                 if len([]) == 1:
#                     s.add(p[0])
#                 elif len(p) == 2:
#                     s.add(find_gcd(p[0], p[1]))
#                 elif len(p) > 2:
#                     s.add(gcd(p))
# print(len(s))
# print(ncsub(A))
for i in range(1, n):
    # print("{} - {}".format(A[i], summ))
    s.add(find_gcd(A[i], summ))
    print(find_gcd(A[i], summ))
# while(i < n):
print(s)

