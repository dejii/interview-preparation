def run(s):
    single = []
    removed = set()
    seen = set()
    for c in s.lower():
        if c == " ":
            continue
        if c in seen and c not in removed:
            single.remove(c)
            removed.add(c)
            continue
        single.append(c)
        seen.add(c)
    print(single)
    return single[0]


print(run("racecars"))

