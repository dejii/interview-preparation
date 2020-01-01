
def findPermutation(A, B):
    mn, mx = 1, B
    result = []
    for x in A:
        if x == 'D':
            result.append(mx)
            mx -= 1
        elif x == 'I':
            result.append(mn)
            mn += 1
    result.append(mn)
    return result


a = ''
print(findPermutation('DIDD', 5))