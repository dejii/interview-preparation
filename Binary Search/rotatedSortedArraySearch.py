def binarySearch(A, B):
    low = 0
    high = len(A) - 1

    while(low <= high):
        mid = low + ((high - low) // 2)
        if (A[mid] == B):
            return mid
        elif (B < A[mid]):
            high = mid - 1
        else:
            low = mid + 1
    return - 1

def findLowest(A):
    n = len(A)
    low = 0
    high = n - 1

    while(low<=high):
        #if low <= high, then the array is sorted and we return low
        if (A[low] <= A[high]):
            return low
        mid = low + int((high - low)/2)
        next = (mid + 1) % n # to accomodate for end of array cases. The next becomes 0
        prev = (mid + n - 1) % n # to accomodate for start of array cases. the prev becomes the last element
        # the pivot element has a unique property where it is less than the prevous element and the next element
        if (A[mid] <= A[prev] and A[mid] <= A[next]):
            return mid
        elif(A[mid] <= A[high]): # we search the left of the element
            high = mid - 1
        elif(A[mid] >= A[low]): # we search the right of the array
            low = mid + 1

    return -1

def search(A, B):
    i = findLowest(A)
    x = binarySearch(A[i:], B)
    if (x != -1):
        return x + len(A[:i])
    else:
        return binarySearch(A[:i], B)

a = [4, 5, 6, 7, 0, 1, 2]
b = 1

print(search(a, b))