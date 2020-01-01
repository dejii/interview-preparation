
def fmt(x):
    return ''.join(map(str, x))
def compare(x,b,c):
    if (len(str(int(x))) < b):
        return False
    else:
        return int(x) < c
def numbersOfLenLandValueLessThanK(A,B,C):
    from itertools import permutations 
        
    p = permutations(A, B)
    r = []
    p = list(map(fmt, p))
    for n in A:
        r.append(str(n) * B)
    p = p+r
    print(p)

    result = [fmt(x) for x in list(p) if compare(x,B,C)]
    
    return len(result) if A else 0

# a = [0,1,2,5]
a = [ 0, 1, 5 ]
b = 1
c = 2
print(numbersOfLenLandValueLessThanK(a,b,c))
