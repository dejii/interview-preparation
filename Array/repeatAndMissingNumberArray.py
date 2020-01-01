"""
You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.

Example:

Input:[3 1 2 5 3] 

Output:[3, 4] 

A = 3, B = 4
"""

def repeatAndMissingNumberArray(A):
    store = set()
    
    m = 0
    n = 0
    # find repeated value
    for a in A:
        if a in store:
            m = a
        else:
            store.add(a)
    for i in range(1, len(A) + 1):
        if i not in store:
            n = i
            break
    
    return [m,n]

a = [3,1,2,5,3]
print(repeatAndMissingNumberArray(a))