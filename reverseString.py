

def reverse_string(s):
    chars = list(s)
    print('initial array {}'.format(chars))
    for i in range(len(s) // 2):
        chars[i], chars[len(s) - i - 1] = chars[len(s) - i - 1], chars[i]
        print(chars)
    return ''.join(chars)

def reverse_word(s):
    chars = s.split(' ')
    print(chars)
    for i in range(len(chars) // 2):
        chars[i], chars[len(chars) - i - 1] = chars[len(chars) - i - 1], chars[i]
    return ' '.join(chars)


if __name__ == '__main__':
    print(reverse_string('market'))
    # print(reverse_word('deji is going to the market'))