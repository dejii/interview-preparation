/**
 * Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") return 0;
  if (haystack === "") return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (
      let j = 0;
      j < needle.length && haystack.charAt(i + j) === needle.charAt(j);
      j++
    ) {
      if (j === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

/**
 * Analysis

The time complexity of the KMP algorithm is O(len(s) + len(p)) "linear" in the worst case.

The key behind KMP is that it takes advantage of the succesful character checks
 during an unsuccessful pattern comparison subroutine.

We may have a series of many comparisons that succeed and then even if one fails 
at the end, we should not repeat the comparison work done since we already saw that a series matched.

What we will do is very similar to the naive algorithm, it is just that we save
 comparisons by tracking the longest propert prefixes of pattern that are also suffixes.

The key is that everytime we have a mismatch we try our best to prevent going backwards
 in s and repeating comparisons.


Algorithm Steps

We will preprocess the pattern string and create an array that indicates the longest
 proper prefix which is also suffix at each point in the pattern string.

A proper prefix does not include the original string.

For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. Proper prefixes are “”, “A” and “AB”.

For example, suffixes of "ABC" are, "", "C", "BC", and "ABC". Proper prefixes are "", "C", and "BC".

Why do we care about these??

We know all characters behind our mismatch character match.

If we can find the length of the longest prefix that matches a suffix to that 
point, we can skip len(prefix) comparisons at the beginning.

The key reason we care about the prefix to suffix is because we want to
 "teleport" back to as early in the string to the point that we still know that there is a match.

Our goal is to minimize going backwards in our search string.


Complexities:

Time: O( len(p) + len(s) )

We spend len(p) time to build the prefix-suffix table and we spend len(s) time for the traversal on average.

Space: O( len(p) )

Our prefix-suffix table is going to be the length of the pattern string.
 */
