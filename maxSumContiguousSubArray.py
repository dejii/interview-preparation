"""
    Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

    For example:

    Given the array [-2,1,-3,4,-1,2,1,-5,4],

    the contiguous subarray [4,-1,2,1] has the largest sum = 6.

    For this problem, return the maximum sum.

"""
def maxSubArray(A):
    """
        Initialize:
            max_so_far = 0
            max_ending_here = 0

        Loop for each element of the array
        (a) max_ending_here = max_ending_here + a[i]
        (b) if(max_ending_here < 0)
                    max_ending_here = 0
        (c) if(max_so_far < max_ending_here)
                    max_so_far = max_ending_here
        return max_so_far
    """
    size = len(A)
    max_so_far = -float('inf')
    max_ending_here = 0
       
    for i in range(0, size): 
        max_ending_here = max_ending_here + A[i] 
        if (max_so_far < max_ending_here): 
            max_so_far = max_ending_here 
  
        if max_ending_here < 0: 
            max_ending_here = 0   
    return max_so_far 

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(maxSubArray(arr))