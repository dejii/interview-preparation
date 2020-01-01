def getGenres(values, mapping):
    res = {}
    for val in values:
        if val in mapping:
            res.append((1, val))


def getPreferences(userBookListenedTo, bookGenres):
    pass
    # create reverse mapping
    mapping = {}
    for key, value in bookGenres.items():
        for val in value:
            mapping[val] = key

    output = {}
    for key, value in userBookListenedTo.items():
        output[key] = getGenres(value, mapping)

    print(mapping)


userBookListenedTo = {
    "Fred": ["mass", "world", "stress"],
    "Jenie": ["happy", "pride"],
    "Rone": "alexender",
}

bookGenres = {
    "Horror": ["mass", "stress"],
    "Comedy": ["happy"],
    "Romance": ["world", "alexender", "pride"],
}

getPreferences(userBookListenedTo, bookGenres)
