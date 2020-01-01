

def searchRange(A, B):
    low = 0
    high = len(A) - 1
    
    while (low <= high):
        mid = low + ((high-low)//2)
        if (A[mid] == B):
            i = mid
            j = mid
            while(i - 1 >= 0):
                if (A[i] == A[i-1]):
                    i-=1
                else:
                    break
                
            while((j + 1) <= len(A)-1):
                if (A[j] == A[j+1]):
                    j+=1
                else:
                    break
            return [i, j] if i < j else [i]
        elif (A[mid] > B):
            high = mid - 1
        else:
            low = mid + 1
            
    return [-1, -1]

a = [1]
# a = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
b = 1
print(searchRange(a,b))