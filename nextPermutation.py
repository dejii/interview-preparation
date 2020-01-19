"""
    Implement the next permutation, which rearranges numbers into the numerically next greater permutation of numbers.

    If such arrangement is not possible, it must be rearranged as the lowest possible order ie, sorted in an ascending order.

    The replacement must be in-place, do not allocate extra memory.

    Examples:

    1,2,3 → 1,3,2

    3,2,1 → 1,2,3

    1,1,5 → 1,5,1

    20, 50, 113 → 20, 113, 50
"""


def nextPermutation(A):
    i = len(A) - 1
    while i > 0 and A[i - 1] >= A[i]:
        i -= 1
    # i is now at the head of the suffix

    # have we reached the beginning of the array? ie the array is arranged
    # in decreasing order, we return the sorted array by simply reversing it
    if i <= 0:
        return reversed(A)

    # Let array[i - 1] be the pivot
    # Find rightmost element that exceeds the pivot
    j = len(A) - 1
    while A[j] <= A[i - 1]:
        j -= 1
    # Now the value array[j] will become the new pivot
    # Assertion: j >= i

    # swap the pivot with j
    A[i - 1], A[j] = A[j], A[i - 1]

    # reverse the suffix in place
    j = len(A) - 1
    while i < j:
        A[i], A[j] = A[j], A[i]
        i += 1
        j -= 1

    return A


a = [20, 50, 113]
print(list(nextPermutation(a)))
