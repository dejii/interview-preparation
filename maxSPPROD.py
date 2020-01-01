"""
You are given an array A containing N integers. The special product of each ith integer 
in this array is defined as the product of the following:<ul>

LeftSpecialValue: For an index i, it is defined as the index j such that A[j]>A[i] (i>j).
 If multiple A[j]’s are present in multiple positions, the LeftSpecialValue is the maximum value of j. 

RightSpecialValue: For an index i, it is defined as the index j such that A[j]>A[i] (j>i).
 If multiple A[j]s are present in multiple positions, the RightSpecialValue is the minimum value of j.

Write a program to find the maximum special product of any integer in the array.

Input: You will receive array of integers as argument to function.

Return: Maximum special product of any integer in the array modulo 1000000007.

Note: If j does not exist, the LeftSpecialValue and RightSpecialValue are considered to be 0.

Constraints 1 <= N <= 10^5 1 <= A[i] <= 10^9
"""


# @param A : list of integers
# @return an integer
def _first_greater(A, prev=True):
    stack = list()
    ans = [0]*len(A)

    # print(stack)
    # print(ans)
    
    it = range(len(A)) if prev else range(len(A)-1, -1, -1)
    print(it)
    

    for i in it:
        print('stack before while at index {} -> {}'.format(i, stack))
        print('A[{}] -> {}'.format(i, A[i]))
        while stack and A[i] >= A[stack[-1]]:
            print('A[stack[-1]] -> {}'.format(A[stack[-1]]))
            print('stack before pop at index {} -> {}'.format(i, stack))
            stack.pop()
            print('stack after pop at index {} -> {}'.format(i, stack))
        ans[i] = stack[-1] if stack else 0
        print('ans at index {} -> {}'.format(i, ans))
        stack.append(i)
    print('ans ->>>{}'.format(ans))
    return ans

# @param A : list of integers
# @return an integer
def maxSpecialProduct(A):
    print('A ==>> {}'.format(A))
    left = _first_greater(A)
    # return
    right = _first_greater(A, prev=False)

    maxx = -float('inf')
    # print(left)
    # print(right)

    for l, r in zip(left, right):
        maxx = max(l * r, maxx)

    return maxx % 1000000007
#     0  1  2  3  4  5  6  7  8  9  10
a = [ 5, 9, 6, 8, 6, 4, 6, 9, 5, 4, 9 ]
print(maxSpecialProduct(a))