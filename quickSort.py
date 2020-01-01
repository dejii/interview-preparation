def partition(A, start, end):
    pivot = A[end]

    pIndex = start # initialize the partition index to the start of the array

    for i in range(start, end): 
        if (A[i] < pivot):
            A[i], A[pIndex] = A[pIndex], A[i]
            pIndex += 1
        
    A[pIndex], A[end] = A[end], A[pIndex]

    return pIndex

def quickSort(A, start, end):
    if (start < end):
        pIndex = partition(A, start, end)

        quickSort(A, start, pIndex - 1)
        quickSort(A, pIndex + 1, end)

input = [7, 20, 1, 6, 8, 5, 3, 4, 200]

quickSort(input, 0, 7)

print(input)