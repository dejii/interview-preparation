"""
How do we test if a string is an interwoven version of two other strings

eg
ABCD
EFGH

AEFBCDGH

BCD
EFGH

BCD
FGH

BCD
GH

CD
GH

D
GH

-
GH

-
H

end
"""


def helper(idx_1, idx_2, idx, s1, s2, full_string):
    a = s1[idx_1] if idx_1 < len(s1) else None
    b = s2[idx_2] if idx_2 < len(s2) else None
    c = full_string[idx] if idx < len(full_string) else None

    # end of journey
    if a is None and b is None and c is None:
        return True

    # end of string and s1 or s2 isn't none
    if c is None:
        return False

    return (a == c and helper(idx_1 + 1, idx_2, idx + 1, s1, s2, full_string)) or (
        b == c and helper(idx_1, idx_2 + 1, idx + 1, s1, s2, full_string)
    )


def solution(s1, s2, full_string):
    idx = 0
    idx_1 = 0
    idx_2 = 0
    return helper(idx_1, idx_2, idx, s1, s2, full_string)


s1 = "ABCD"
s2 = "EFGH"
full_string = "AEFBCDGH"

print(solution(s1, s2, full_string))

