def findDuplicateInArray(A):
    store = {}

    for i in range(len(A)):
        if A[i] in store:
            return A[i]
        else:
            store[A[i]] = i

    return -1


a = [3, 4, 1, 4, 1]
print(findDuplicateInArray(a))
