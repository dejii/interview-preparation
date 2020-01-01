"""
Given a positive integer which fits in a 32 bit signed integer, 
find if it can be expressed as A^P where P > 1 and A > 0. A and P both should be integers.

"""
import math

def isPower(A):

    def isPerfectSquare(x): 
    
        # Find floating point value of  
        # square root of x. 
        sr = math.sqrt(x) 
    
        # If square root is an integer 
        return ((sr - math.floor(sr)) == 0)

    # if it is a perfect square, then return true because it can be expressed as powers
    if (isPerfectSquare(A)):
        # pass
        return True

    factors = []

    # find all the prime factors of the given number
    for i in range(2, int(math.sqrt(A) + 1)):

        if(A % i == 0):
            count = 0

            while(A % i == 0):
                A = A // i
                count +=1

            factors.append((i, count))

    # return factors
    print(factors)
    # at this point, A is equal to 1 is it's a prime number
    # if a is not equal to one then it is a prime and can't be represented by powers so we return false
    if (A != 1):
        return False
    #if we can represent it by the power of only one prime factor then we have a solution
    if len(factors) == 1:
        return True

    return False


print(isPower(216))