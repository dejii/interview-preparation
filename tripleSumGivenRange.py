

def tripleSumGivenRange(A):
    A = list(map(float, A))
            
    sum_less_2 = 0
    curr_sum=0
    count = 0
    for i in range(len(A)):
        count +=1
        if (sum_less_2 + A[i] < 2):
            sum_less_2+=i
            if (count == 3):
                return 1
        curr_sum +=A[i]
    
        
    return 0

a = [0.6, 0.7, 0.8, 1.2, 0.4]
print(tripleSumGivenRange(a))