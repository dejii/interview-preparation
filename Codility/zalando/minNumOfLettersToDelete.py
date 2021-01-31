def solution(S):

    word_map = {}

    for ch in S:
        if ch in word_map:
            word_map[ch] += 1
        else:
            word_map[ch] = 1

    num_map = {}

    for key, val in word_map.items():
        if val in num_map:
            num_map[val].add(key)
        else:
            num_map[val] = set(key)

    s = set(S)
    ans = 0
    for ch in s:
        cnt = word_map[ch]
        while cnt in num_map and len(num_map[cnt]) > 1:
            if ch in num_map[cnt]:
                num_map[cnt].remove(ch)
            cnt -= 1
            if cnt not in num_map:
                num_map[cnt] = set(ch)
                break

    for key in num_map:
        ans += key

    t = len(S) - ans
    print(t)
    return t


# solution("ccaaffddecee")
# solution("aaaabbbb")
# solution("eeee")
solution("example")
# affeee
# ccc + dd
2 + 2
