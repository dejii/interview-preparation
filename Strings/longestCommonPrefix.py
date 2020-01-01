"""
Write a function to find the longest common prefix string amongst an array of strings.

Longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.

As an example, longest common prefix of "abcdefgh" and "abcefgh" is "abc".

Given the array of strings, you need to find the longest S which is the prefix of ALL the strings in the array.

Example:

Given the array as:

[

  "abcdefgh",

  "aefghijk",

  "abcefgh"
]
"""

def longestCommonPrefix(A):
    j = float('inf')
    n = len(A)
    for a in A: # get the shortest string length and use it as basis for comparison
        j = min(len(a), j)
        
    result = ''
    for i in range(int(j)):
        letter = A[0][i]
        k = 1
        while(k<n):
            if (letter == A[k][i]):
                k+=1
            else:
                return result
        result+=letter
        
    return result
            

a = [

  "abcdefgh",

  "aefghijk",

  "abcefgh"
]
print(longestCommonPrefix(a))