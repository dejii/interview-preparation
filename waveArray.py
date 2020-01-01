"""
    Given an array of integers, sort the array into a wave like array and return it, 
    In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

    Example

    Given [1, 2, 3, 4]

    One possible answer : [2, 1, 4, 3]
    Another possible answer : [4, 1, 3, 2]
    NOTE : If there are multiple answers possible, return the one thats lexicographically smallest. 
    So, in example case, you will return [2, 1, 4, 3] 
"""

"""
    Solution
        take the sorted array [1, 2, 3, 4]
        we move in steps of twos and swap the current number and the following number
        if there's no following number, we leave it out

"""
def waveArray(A):
    A.sort()
    n = len(A)
    for i in range(0,n,2):
        if i + 1 < n: # don't exceed the bounds of the array for each swap
            A[i], A[i+1] = A[i+1], A[i]
            
    return A

a = [1, 2, 3, 4]
print(waveArray(a))