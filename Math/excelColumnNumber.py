"""
Given a column title as appears in an Excel sheet, return its corresponding column number.

Example:

    A -> 1
    
    B -> 2
    
    C -> 3
    
    ...
    
    Z -> 26
    
    AA -> 27
    
    AB -> 28 
"""
"""
The process is similar to binary to decimal conversion.
For example, to convert AB, we do 26 * 1 + 2.
As another example, to convert CDA, we do
3*26*26 + 4*26 + 1
=>26(3*26 + 4)+ 1
=>26(0*26 + 3*26 +4)+1
"""
def excelColumnNumber(A):
    startCharCode = ord('A') - 1 # returns 65-1=64; reference level for getting the value of the character [1-26]->[A-Z]
    result = 0
    power = 0
    # do a base conversion from end of string
    for i in range(len(A) - 1, -1, -1):
        value = ord(A[i]) - startCharCode
        result += value * (26**power)
        power+=1
    return result

    # do a base conversion from start of string
    # n = len(A) - 1
    # for i in range(len(A)):
    #     value = ord(A[i]) - startCharCode
    #     result += value * (26**n)
    #     power+=1
    #     n-=1
    # return result


a = 'AB'
print(excelColumnNumber(a))