"""
Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.
"""


def smallest_distance(s, w1, w2):
    if w1 == w2:
        return 0

    words = s.split(" ")
    n = len(words)

    last_i = -1
    last_j = -1
    ans = float("inf")
    for i in range(n):
        if words[i] == w1:
            last_i = i
            if last_j != -1:
                ans = min(abs(last_i - last_j - 1), ans)
        if words[i] == w2:
            last_j = i
            if last_i != -1:
                ans = min(abs(last_j - last_i - 1), ans)

    return ans


s = "dog cat hello cat dog dog cat world"
w1 = "hello"
w2 = "world"
print(smallest_distance(s, w1, w2))
