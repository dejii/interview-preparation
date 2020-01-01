def isValid(A):
    stack = []
    for a in A:
        if len(stack) == 0:
            stack.append(a)

        elif stack[-1] == "(" and a == ")":
            stack.pop()
        elif stack[-1] == "[" and a == "]":
            stack.pop()
        elif stack[-1] == "{" and a == "}":
            stack.pop()
        else:
            stack.append(a)

    return 1 if len(stack) == 0 else 0


print(isValid("({())"))

