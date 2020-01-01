/*
    Given an array of integers, sort the array into a wave like array and return it, 
    In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

    Example

    Given [1, 2, 3, 4]

    One possible answer : [2, 1, 4, 3]
    Another possible answer : [4, 1, 3, 2]
    NOTE : If there are multiple answers possible, return the one thats lexicographically smallest. 
    So, in example case, you will return [2, 1, 4, 3] 
*/

/*
        Solution
        take the sorted array [1, 2, 3, 4]
        we move in steps of twos and swap the current number and the following number
        if there's no following number, we leave it out
*/
function waveArray(A) {
    A.sort();

    for(let i = 0; i < A.length - 1; i+=2) {
        
            let temp = A[i];
            A[i] = A[i + 1]
            A[i + 1] = temp
        
    }

    return A
}

a = [1,2,3,4,5]
console.log(waveArray(a))