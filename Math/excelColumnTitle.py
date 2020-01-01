

def excelColumnTitle(A):
    startCharCode = ord('A') - 1
    result = ''
    while(A > 0):
        value = (A % 26)
        print(value)
        if value == 0:
            result += 'Z'
            A = (A // 26) - 1
        else:
            result += chr(value + startCharCode)
            A = A // 26
    return result[::-1]

a = 676+26
print(excelColumnTitle(a))