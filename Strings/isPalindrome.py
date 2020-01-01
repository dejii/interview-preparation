

def isPalindrome(A):
    s = []
    
    for c in A:
        if 'A' <= c <= 'Z' or 'a' <= c <= 'z' or '0' <= c <= '9':
            s.append(c)
    
    s = ''.join(s)
    
    #print s.lower(), s[::-1].lower()
    if s.lower() == s[::-1].lower():
        return 1
    else:
        return 0