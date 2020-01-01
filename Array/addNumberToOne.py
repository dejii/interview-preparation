def next_number(nums):
    i = len(nums) - 1
    j = i
    if nums[i] == 9:
        nums.append(0)
        j = i + 1
    carry = 1
    while j >= 0:
        if i < 0:
            s = carry
        else:
            s = nums[i] + carry
        nums[j] = s % 10
        carry = s // 10
        i -= 1
        j -= 1

    return nums


a = [9, 9, 9]
print(next_number(a))
