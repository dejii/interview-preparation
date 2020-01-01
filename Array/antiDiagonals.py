"""
Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.

Example:

		
Input: 	

1 2 3       00 01 02
4 5 6       10 11 12
7 8 9       20 21 22     

            [[00], [01,10], [02,11,20], [12,21], [22]]

Return the following :

[ 
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
]


Input : 
1 2
3 4

Return the following  : 

[
  [1],
  [2, 3],
  [4]
]
"""

"""

1 2 3       00 01 02
4 5 6       10 11 12
7 8 9       20 21 22     

            [[00], [01,10], [02,11,20], [12,21], [22]]
"""
def antiDiagonals(A):
    B = [[] for i in range(len(a)*2)]
    for i in range(len(a)):
        for j in range(len(a)):
            print('i + j ->{} | a[i][j] -> {}'.format(i+j, a[i][j]))
            B[i+j].append(a[i][j])

        print(B)
    
    
    return B[:-1]

a = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
print(antiDiagonals(a))