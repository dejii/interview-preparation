"""
Suppose a sorted array A is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array will not contain duplicates.

NOTE 1: Also think about the case when there are duplicates. 
Does your current solution work? How does the time complexity change?*
"""

def timesRotated(A):
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

a = [4,5,6,7,0,1,2]
print(timesRotated(a))

