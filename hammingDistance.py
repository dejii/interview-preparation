"""
Hamming distance between two non-negative integers is defined as the number of
 positions at which the corresponding bits are different.

For example,

HammingDistance(2, 7) = 2, as only the first and the third bit differs in the binary 
representation of 2 (010) and 7 (111).

Given an array of N non-negative integers, find the sum of hamming distances of all pairs of integers in the array.
Return the answer modulo 1000000007.

Example

Let f(x, y) be the hamming distance defined above.

A=[2, 4, 6]

010 100 110

We return,
f(2, 2) + f(2, 4) + f(2, 6) + 
f(4, 2) + f(4, 4) + f(4, 6) +
f(6, 2) + f(6, 4) + f(6, 6) = 

0 + 2 + 1
2 + 0 + 1
1 + 1 + 0 = 8
"""


def hammingDistance(A):
    a, b = A
    a = "{0:b}".format(a)
    b = "{0:b}".format(b)
    diff = len(a) - len(b)
    if diff < 0:
        a = "0" * abs(diff) + a
    else:
        b = "0" * abs(diff) + b
    return sum(ch1 != ch2 for ch1, ch2 in zip(a, b))


def soln(A):
    distance = 0
    for i in range(len(A) - 1):
        for j in range(i, len(A)):
            s = hammingDistance((A[i], A[j])) * 2
            distance += s
    return distance


# print(soln((2,4,6)))
"""
int           ->2   4   6   7
binary        ->010 100 110 111
----------------------------------x y      x-> no of 1s at that index, y->no of 0s at that index
bitPosition 0 ->001 001 001 001=> 1 3
bitPosition 1 ->010 010 010 010=> 3 1
bitPosition 2 ->100 100 100 100=> 3 1
            .   .   .   .   .
bitPosition31 ->... ... ... ...=> 0 30
"""


def hammingDistanceReVisited(A):
    mod = 1000000007
    s = 0
    for bitPosition in range(31):
        countBitOne = 0
        countBitZero = 0
        for a in A:
            # 1 << bitPosition, shifts one by bitPosition places (ie pads bitPosition no of zeros to the right of one)
            #   at bitPosition 0 we have 01
            #   at bitPosition 1 we have 10
            #   at bitPosition 4 we have 10000
            # This allows bitwise comparison with the current integer to find out if we have a 1 or a 0 at that index
            # We keep track of the count of 1s and 0s at each index
            # & -> bitwise AND gives us a digit > 0 if 1 exist at that that index else returns a 0
            if a & (1 << bitPosition):
                countBitOne += 1
            else:
                countBitZero += 1
        # countBitOne * countBitZero gives us the number of places we have different bits
        # *2 to cover for the reverse case like f(2,4) == f(4,2)
        s += 2 * countBitOne * countBitZero
    return s % mod  # because the question says so


a = [2, 4, 6, 7]
print(hammingDistanceReVisited(a))

""" 
int           ->2   4   6   7
binary        ->010 100 110 111
----------------------------------x y      x-> no of 1 bit at that position, y->no of 0 bit at that position
bitPosition 0 ->001 001 001 001=> 1 3
bitPosition 1 ->010 010 010 010=> 3 1
bitPosition 2 ->100 100 100 100=> 3 1
            .   .   .   .   .
bitPosition31 ->... ... ... ...=> 0 31
int Solution::hammingDistance(const vector<int> &A) {
    int inputSize = A.size();
    int mod = 1000000007;
    int sum = 0;
    for (int bitPosition = 0; bitPosition < 31; bitPosition++) {
        int cntBitOne = 0, cntBitZero = 0;
        for(int i = 0; i < inputSize; i++) {
            if (A[i] & (1 << bitPosition)) cntBitOne++;
            else cntBitZero++;
        }
        sum = sum + ((2LL * cntBitOne * cntBitZero) % mod);
        if (sum >= mod) sum = sum - mod;
    }
    return sum;

"""
