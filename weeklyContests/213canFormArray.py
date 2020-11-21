def canFormArray(arr, pieces):
    store = dict()

    for piece in pieces:
        for m in piece:
            store[m] = piece

    i = 0
    n = len(arr)
    while i < n:
        num = arr[i]

        if num in store:
            temp = store[num]
            k = len(temp)
            for j in range(k):
                pcs = temp[j]
                if num == pcs:
                    i += 1
                    if i < n:
                        num = arr[i]
                else:
                    return False
        else:
            return False

    return True


# arr = [91, 4, 64, 78]
# pieces = [[78], [4, 64], [91]]
# arr = [15, 88]
# pieces = [[88], [15]]
# arr = [1, 3, 5, 7]
# pieces = [[2, 4, 6, 8]]

arr = [91, 90, 12, 34, 55, 2, 79]
pieces = [[55, 79], [91, 34, 2, 12], [90]]
print(canFormArray(arr, pieces))

