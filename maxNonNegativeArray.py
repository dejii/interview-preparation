"""
    Find out the maximum sub-array of non negative numbers from an array.
    The sub-array should be continuous. That is, a sub-array created by 
    choosing the second and fourth element and skipping the third element is invalid.

    Maximum sub-array is defined in terms of the sum of the elements in the sub-array. 
    Sub-array A is greater than sub-array B if sum(A) > sum(B).

    Example:

    A : [1, 2, 5, -7, 2, 3]
    The two sub-arrays are [1, 2, 5] [2, 3].
    The answer is [1, 2, 5] as its sum is larger than [2, 3]
    NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
    NOTE 2: If there is still a tie, then return the segment with minimum starting index

    2 -3 4 5 6 7
"""

"""
Loop i = 1 to Array.length :
        IF current element is positive :
                update current sum
                compare max sum with current sum
                update max sum
                update max ranges
        ELSE :
            current sum := 0
            update current ranges.
EndLoop;
"""
def maxNonNegativeArray(A):
    max_sub = []
    curr_sub = []
    curr_sum = 0
    max_sum = -1
    
    for i in range(len(A)):
        if A[i] >=0 :
            curr_sub.append(A[i])
            curr_sum += A[i]
        else:
            curr_sum = 0
            curr_sub = []
        if curr_sum > max_sum:
            max_sub = curr_sub
            max_sum = curr_sum
        elif curr_sum == max_sum and len(max_sub) <= len(curr_sub):
            max_sub = curr_sub
            max_sum = curr_sum
            
    return max_sub

        


a =  [1, 2, 5, -7, 2, 3]
print(maxNonNegativeArray(a))