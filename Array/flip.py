#!/usr/bin/python
"""
You are given a binary string(i.e. with characters 0 and 1) S consisting of characters
 S1, S2, …, SN. In a single operation, you can choose two indices L and R such that 1 ≤ L ≤ R ≤ N 
 and flip the characters SL, SL+1, …, SR. By flipping, we mean change character 0 to 1 and vice-versa.

Your aim is to perform ATMOST one operation such that in final string number of 1s is maximised. 
If you don’t want to perform the operation, return an empty array. Else, return an array consisting 
of two elements denoting L and R. If there are multiple solutions, return the lexicographically smallest
 pair of L and R.

Notes:

Pair (a, b) is lexicographically smaller than pair (c, d) if a < c or, if a == c and b < d.
For example,

S = 010

Pair of [L, R] | Final string
_______________|_____________
[1 1]          | 110
[1 2]          | 100
[1 3]          | 101
[2 2]          | 000
[2 3]          | 001

We see that two pairs [1, 1] and [1, 3] give same number of 1s in final string. So, we return [1, 1].
Another example,

If S = 111

No operation can give us more than three 1s in final string. So, we return empty array [].
"""

def flip(A):
    # s = 0
    B = []
    # append 1 where we encounter 1 and 0 otherwise
    for i in range(len(A)):
        # if A[i] == '\n': continue
        # s += int(A[i])
        if A[i] == '1':
            B.append(-1)
        else:
            B.append(1)
    print (B)
            
    max_here = 0
    max_so_far = 0
    c_start = 1 
    end = -1
    count = 0
    print([(i,x) for i,x in enumerate(B)])
    for i, x in enumerate(B):
        count+=1
        #print i
        print('iteration {} max_here + x = {} + {}'.format(count, max_here, x))
        if max_here+x < 0 :
            c_start = i + 2
            max_here = 0
        else:
            max_here += x

        print('iteration {} max_here = {}'.format(count, max_here))
            
        print('iteration {} max_here > max_so_far = {} > {}'.format(count, max_here, max_so_far))
        if max_here > max_so_far:
            start = c_start
            end = i + 1
            max_so_far = max_here
        print('iteration {} start -> {} || end -> {}'.format(count, start, end))
        print('iteration {} ===== max_here = {}'.format(count, max_here))
    if end == -1:
        return []
    else:
        return [start, end]

# a = '010'
a = '00100'
print(flip(a))