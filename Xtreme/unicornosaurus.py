# def does_overlap(A, X):
#     a, b = A
#     x, y, _ = X

#     return a >= x and b <= y


# N, M, S = [int(i) for i in input().split(" ")]
# broken_planks = []
# for i in range(N):
#     x = [int(i) for i in input().split(" ")]
#     broken_planks.append(x)
# superpower_actions = []
# for i in range(M):
#     x = [int(i) for i in input().split(" ")]
#     superpower_actions.append(x)

# superpower_actions = sorted(superpower_actions, key=lambda x: x[2])
# print(superpower_actions)

# minn = float("inf")
# res = -1
# for broken_plank in broken_planks:
#     for superpower_action in superpower_actions:
#         if does_overlap(broken_plank, superpower_action):
#             _, __, k = superpower_action
#             minn = min(minn, k)
# print(minn)


def does_overlap(A, X):
    a, b = A
    x, y = X

    return a >= x and b <= y


# N, M, S = [int(i) for i in input().split(" ")]
N, M, S = 1, 3, 15
broken_planks = []
# for i in range(N):
#     x = [int(i) for i in input().split(" ")]
#     broken_planks += x
broken_planks = [5, 10]
# print(broken_planks)
first = broken_planks[0]
last = broken_planks[-1]
superpower_actions = []
total = 0
# for i in range(M):
#     x = [int(i) for i in input().split(" ")]
#     _, __, k = x
#     total += k
#     superpower_actions.append(x)

superpower_actions = [[3, 7, 2], [6, 12, 5], [2, 11, 6]]
superpower_actions = sorted(superpower_actions, key=lambda x: x[2])
# print(superpower_actions)
count = 1
i = 0
summ = float("inf")
while count <= len(superpower_actions):
    interval = superpower_actions[i : i + count]
    print(interval)
    if interval:
        if does_overlap([first, last], [interval[0][0], interval[-1][1]]):
            s = sum(i[2] for i in interval)
            if summ > s:
                summ = s

    # i += 1
    i = (i + 1 + len(superpower_actions)) % len(superpower_actions)
    if (i + 1) == len(superpower_actions):
        count += 1

print(summ)
