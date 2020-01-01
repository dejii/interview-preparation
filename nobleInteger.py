
def nobleInteger(A):
    A = sorted(A)
    for i in range(len(A)):
        if (i + 1 < len(A) and A[i] == A[i+1]):
            continue
    

        if(len(A) - i - 1 == A[i]):
            return 1
    return -1

a = [3, 5, 6]
print(nobleInteger(a))