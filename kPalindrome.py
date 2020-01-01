from itertools import combinations


def isPalindrome(s):
    n = len(s)
    for i in range(n // 2):
        if s[i] != s[n - i - 1]:
            return False
    return True


def kPalindrome(s, k):
    possible_palindromes = []
    for i in range(1, k + 1):
        for j in combinations(s, 4):
            curr = "".join(j)
            # if (isPalindrome(curr)):
            # return 'YES'
            possible_palindromes.append(curr)

    # return 'NO'

    return possible_palindromes


# print(kPalindrome("abcd", 4))
def get_all_substrings_1(input_string):
    length = len(input_string)
    return [input_string[i : j + 1] for i in range(length) for j in range(i, length)]


def generate(letters, n, r):
    x = get_all_substrings_1(letters)
    print(x)
    res = []
    k = len(letters)
    i = 0
    while r >= 2:
        while k > 0:
            res.append(str(n) + str(x[i]))
            i += k
            k -= 1
        x = res
        # k = len(letters) - 1
        r -= 1
    return res


x = get_all_substrings_1("aabbccdd")
# print(x)
x = list(filter(lambda x: x.startswith("c") and len(x) == 2, x))
print(x)
# print(get_all_substrings_1("aabbccdd"))

