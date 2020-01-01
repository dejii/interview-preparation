def braces(A):
    stack = list()
    for a in A:
        if a in ["-", "+", "*", "/", "("]:
            stack.append(a)
        elif a == ")":
            if stack[-1] == "(":
                return 1
            while len(stack) > 0 and stack[-1] != "(":
                stack.pop()
            stack.pop()
    return 0

