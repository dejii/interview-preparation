
def BinarySearch(A, B, searchFirst=True):
    n = len(A)
    low = 0
    high = n-1
    result = -1
    while(low<=high):
        mid = low + int((high-low)/2)
        
        if (A[mid] == B):
            result = mid
            if searchFirst:
                high = mid - 1
            else:
                low = mid+1
        elif(B < A[mid]): # search the left
            high = mid-1
        else: # search the right 
            low = mid+1
        
    return result

def findCount(A, B):
    start = BinarySearch(A,B,searchFirst=True)
    if start == -1:
        return 0
    end = BinarySearch(A,B,searchFirst=False)
    return end - start + 1

a = [ 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10 ]
print(findCount(a, 20))