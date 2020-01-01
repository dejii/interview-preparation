

def countAndSay(A):
    ans = '1'
    i = 1

    while i < A:
        B = str(ans)
        result = ''
        j = 0
        while j < len(B):
            count = 1
            while (j + 1 < len(B)) and B[j] == B[j+1]:
                count += 1
                j = j + 1
            result += str(count) + B[j]
            j +=1
        ans = result
        i+=1

    return result

a = 4
print(countAndSay(a))
                
            