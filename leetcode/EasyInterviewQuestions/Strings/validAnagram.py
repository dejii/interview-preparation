def isAnagram(s, t):
    if len(s) != len(t):
        return False

    store = {}

    for i in range(len(s)):
        store[s[i]] = store.get(s[i], 0) + 1
        store[t[i]] = store.get(t[i], 0) - 1

    print(store)

    for _, val in store.items():
        if val != 0:
            return False

    return True


print(isAnagram("eat", "tea"))

