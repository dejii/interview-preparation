def countVowelStrings(n):
    vw = "aeiou"
    vowels = ["a", "e", "i", "o", "u"]
    m = len(vowels)
    for i in range(m):
        for j in range(m - n + 1):
            if i < j:
                print(vw[i:j])


countVowelStrings(2)
