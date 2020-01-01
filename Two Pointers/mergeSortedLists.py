

def merge(A, B):
    m = len(A)
    n = len(B)
    i = 0
    j = 0
    ans = []
    while(i < m and j < n):
        if(A[i] < B[j]):
            ans.append(A[i])
            i += 1
        else:
            ans.append(B[j])
            j+=1
    return ans + A[i:] + B[j:]

a = [1, 5, 8]
b = [6, 9]
print(merge(a,b))