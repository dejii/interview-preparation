"""
Given an unsorted integer array, find the first missing positive integer.

Example:

Given [1,2,0] return 3,

[3,4,-1,1] return 2,

[-8, -7, -6] returns 1

Your algorithm should run in O(n) time and use constant space.
"""

def firstMissingInteger(A):
    
    store = {}
    # store all positive numbers in the array
    for i in range(len(A)):
        if A[i] > 0:
            store[A[i]] = i

    # take from 1 to len(A) and return the first positive number
    # not in the store
    print(store)
    for i in range(1, len(A) + 1):
        if i not in store:
            return i
        
    # if we get here, we probably don't have any positive number or we have on item in the array
    # we return 1 if the last item < 0 else we add 1 to the last item and return it
    return 1 if A[-1] < 0 else A[-1] + 1


# a = [3,4,-1,1]
# print(firstMissingInteger(a))

class Solution:
    """
        Utility function that puts all non-positive  
        (0 and negative) numbers on left side of  
        arr[] and return count of such numbers
    """
    def segregate (self, arr, size):
        j = 0
        for i in range(size):
            if arr[i] < 0:
                arr[i], arr[j] = arr[j], arr[i]
                # increment count of non-positive integers 
                j+=1
        print('segregate -> {}'.format(arr))
        return j

    def findMissingPositive(self, arr, size):
       
        # Mark arr[i] as visited by making  
        # arr[arr[i] - 1] negative. Note that  
        # 1 is subtracted because index start  
        # from 0 and positive numbers start from 1 
        for i in range(size):
            x = abs(arr[i])
            if ((x - 1) < size) and ((arr[x-1] > 0)):
                arr[x-1] = -arr[x-1]
        print('marked visited -> {}'.format(arr))
        
        # Return the first index value at which  
        # is positive 
        for i in range(size):
            if (arr[i] > 0):
                return i+1 # 1 is added because indexes start from zero
        return size+1

    def findMissing(self,arr,size):
        # First separate positive and  
        # negative numbers 
        shift = self.segregate(arr, size)
        print('size - shift -> {} - {}'.format(size,shift))
        arr2 = [0] * (size-shift)

        j=0
        for i in range(shift, size):
            arr2[j] = arr[i]
            j+=1   
        print('arr2 -> {}'.format(arr2))
        # Shift the array and call  
        # findMissingPositive for 
        # positive part 
        return self.findMissingPositive(arr2, j)

    def solve(self, arr):
        size = len(arr)
        missing = self.findMissing(arr, size)
        return missing

arr = [0, 10, 2, -10, -20]
s = Solution()
print(s.solve(arr))
       
         
