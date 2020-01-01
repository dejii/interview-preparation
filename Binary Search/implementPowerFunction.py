

def implementPowerFunction(x, n, d):
    result = 1
    # base = x % d
    # while n > 0:
    #     if n % 2 == 1:
    #         result = (result*base) % d
    #     # print(result)
    #     n = n >> 1
    #     print(n)
    #     base = (base*base)%d
    # return result%d
    base = x
    while n > 0:
        if n % 2 == 1:
            result = (result*base)
        # print(result)
        n = n >> 1
        print(n)
        base = (base*base)
    return result


print(implementPowerFunction(2, 3, 3))