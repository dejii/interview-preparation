/*
You are given an array (zero indexed) of N non-negative integers, A0, A1 ,…, AN-1.
Find the minimum sub array Al, Al+1 ,…, Ar so if we sort(in ascending order) 
that sub array, then the whole array should get sorted.
If A is already sorted, output -1.

Example :

Input 1:

A = [1, 3, 2, 4, 5]

Return: [1, 2]

Input 2:

A = [1, 2, 3, 4, 5]

Return: [-1]
In the above example(Input 1), if we sort the subarray A1, A2, then whole array A should get sorted.
*/

/*
Examples:
1) If the input array is [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60], your program 
should be able to find that the subarray lies between the indexes 3 and 8.

2) If the input array is [0, 1, 15, 25, 6, 7, 30, 40, 50], your program should be 
able to find that the subarray lies between the indexes 2 and 5.

Recommended: Please solve it on “PRACTICE” first, before moving on to the solution.
Solution:
1) Find the candidate unsorted subarray 
a) Scan from left to right and find the first element which is greater than the next
 element. Let s be the index of such an element. In the above example 1, s is 3 (index of 30).
b) Scan from right to left and find the first element (first in right to left order)
 which is smaller than the next element (next in right to left order). Let e be the index of such an element. In the above example 1, e is 7 (index of 31).

2) Check whether sorting the candidate unsorted subarray makes the complete array sorted or not.
 If not, then include more elements in the subarray.
a) Find the minimum and maximum values in arr[s..e]. Let minimum and maximum values 
be min and max. min and max for [30, 25, 40, 32, 31] are 25 and 40 respectively.
b) Find the first element (if there is any) in arr[0..s-1] which is greater than min, 
change s to index of this element. There is no such element in above example 1.
c) Find the last element (if there is any) in arr[e+1..n-1] which is smaller than max, 
change e to index of this element. In the above example 1, e is changed to 8 (index of 35)

3) Print s and e.
*/

function maximumUnsortedArray(A) {
    var s = 0;
    var e = A.length - 1;
    var max = -Infinity;
    var min = Infinity;

    // find the index range of the candidate unsorted array
    // ie s - start of the unsorted array -> 1st element greater than the next one (left to right scan)
    // ie e - end of the unsorted array -> 1st element smaller than the next one (right to left scan)
    for (s= 0; s < A.length - 1; s++) {
        if (A[s] > A[s+1]) {
            break;
        }
    }
    if (s === A.length - 1) {
        // the array is sorted
        return -1
    }

    for (e = A.length-1; e > 0; e--) {
        if (A[e] < A[e-1]) {
            break;
        }
    }


    // we now have our [s, e] -> the range of the unsorted array

    // initialize max, min to the first item in the unsorted array
    max = A[s];
    min = A[s];
    // we find the maximum and minimum inside the unsorted array
    for (var i = s + 1; i <= e; i++) {
        if (A[i] > max) {
            max = A[i]
        }
        if (A[i] < min) {
            min = A[i]
        }
    }

    // -> we now have our minimum and maximum in the unsorted array range stored in min, max resp

    // scan the range before the unsorted array and check if there exist a number greater than our minimum in the unsorted array
    // scan for the first number (left to right scan)
    for (var i = 0; i < s; i++) {
        if (A[i] > min) {
            s = i;
            break;
        }
    }
    // scan the range after the unsorted array and check if there exist a number less than our maximum in the unsorted array
    // scan for the first number (right to left scan)
    for (var i = A.length - 1; i >= e +1; i--) {
        if (A[i] < max) {
            e = i
            break;
        }
    }

    // return [A[s],A[e]]
    return [s,e]



}

var a = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]

console.log(maximumUnsortedArray(a))