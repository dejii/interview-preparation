/**
 * class Solution {
    public int maximumSwap(int num) {
        char[] digits = Integer.toString(num).toCharArray();
        
        int[] buckets = new int[10];
        for (int i = 0; i < digits.length; i++) {
            buckets[digits[i] - '0'] = i;
        }
        
        for (int i = 0; i < digits.length; i++) {
            for (int k = 9; k > digits[i] - '0'; k--) {
                if (buckets[k] > i) {
                    char tmp = digits[i];
                    digits[i] = digits[buckets[k]];
                    digits[buckets[k]] = tmp;
                    return Integer.valueOf(new String(digits));
                }
            }
        }
        
        return num;
    }
}
\
Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. 
Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
 */

function maximumSwap(num) {
  let digits = num.toString().split("");
  let buckets = new Array(10).fill(-1);

  for (let i = 0; i < digits.length; i++) {
    buckets[digits[i] - "0"] = i;
  }

  for (let i = 0; i < digits.length; i++) {
    for (let k = 9; k > digits[i] - "0"; k--) {
      if (buckets[k] > i) {
        let tmp = digits[i];
        digits[i] = digits[buckets[k]];
        digits[buckets[k]] = tmp;
        return parseInt(digits.join(""));
      }
    }
  }
  return num;
}

console.log(maximumSwap(995));

/**
 * """
    Implement the next permutation, which rearranges numbers into the numerically next greater 
    permutation of numbers.

    If such arrangement is not possible, it must be rearranged as the lowest possible order ie,
     sorted in an ascending order.

    The replacement must be in-place, do not allocate extra memory.

    Examples:

    1,2,3 → 1,3,2

    3,2,1 → 1,2,3

    1,1,5 → 1,5,1

    20, 50, 113 → 20, 113, 50
"""

def nextPermutation(A):
    i = len(A) - 1
    while i > 0 and A[i - 1] >= A[i]:
        i-=1
    # i is now at the head of the suffix
    
    # have we reached the beginning of the array? ie the array is arranged
    # in decreasing order, we return the sorted array by simply reversing it
    if i <=0:
        return reversed(A)
        
    # Let array[i - 1] be the pivot
    # Find rightmost element that exceeds the pivot
    j = len(A) - 1
    while (A[j] <= A[i - 1]):
        j-=1
    # Now the value array[j] will become the new pivot
    # Assertion: j >= i
    
    # swap the pivot with j
    A[i-1], A[j] = A[j], A[i-1]
    
    # reverse the suffix in place
    j = len(A) - 1
    while(i < j):
        A[i], A[j] = A[j], A[i]
        i+=1
        j-=1
        
    return A

a = [20, 50, 113]
print(list(nextPermutation(a)))
 */
