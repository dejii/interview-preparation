/*
    Given an integer array, find if an integer p exists in the array such that the number of integers 
    greater than p in the array equals to p
    If such an integer is found return 1 else return -1.
*/

/*
    Approach
    -> sort the array
    -> loop
        -> if the current number and the next number are equal, continue to the next integer
        -> check if the current integer and the number of integers greater than the current integer
        -> if equal, we have our number else we don't
*/
function nobleInteger(A) {
    A = A.sort();
        
    for (var i = 0; i < A.length-1; i++) {
        if (A[i] == A[i+1]) {
            continue
        }
        
        if ((A.length - i - 1) === A[i]) {
            return 1
        }     
    }
    
    return -1
}

a = [2, 2, 2]
console.log(nobleInteger(a))