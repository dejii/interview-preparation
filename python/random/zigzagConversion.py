def convert(s, numRows):
    arr = ["" for i in range(numRows)]
    down = True
    i = 0
    n = len(s)
    index = 0
    while i < n:
        print(index)
        if down:
            arr[index] += s[i]
            index = index + 1
            if index == numRows:
                down = False
                index = index - 2 if index - 2 >= 0 else 0
        else:
            arr[index] += s[i]
            index -= 1
            if index == 0:
                down = True
        i += 1
    print(arr)
    print("".join(arr))


# convert("PAYPALISHIRING", 3)
convert("ABCD", 1)

