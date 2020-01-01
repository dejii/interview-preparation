
function segregate (arr, size) {
    var j = 0
    for (var i = 0; i < size; i++) {
        if (arr[i] < 0) {
            var temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            // increment count of non-positive integers 
            j+=1
        }
    }
    return j
}

function findMissingPositive(arr, size) {
    // Mark arr[i] as visited by making  
    // arr[arr[i] - 1] negative. Note that  
    // 1 is subtracted because index start  
    // from 0 and positive numbers start from 1 
    for (var i = 0; i < size; i++) {
        var x = Math.abs(arr[i])
        if (((x - 1) < size) && ((arr[x-1] > 0))) {
            arr[x-1] = -arr[x-1]
        }
    }
    
    
    // Return the first index value at which  
    // is positive 
    for (var i = 0; i < size; i++) {
        if (arr[i] > 0) {
            return i+1 // 1 is added because indexes start from zero
        }
    }
    return size+1
}

function findMissing(arr,size){
        // First separate positive and  
        // negative numbers 
        shift = segregate(arr, size)
        arr2 = [];
        for(var i = 0; i < size - shift; i++) {
            arr2[i] = 0
        }

        j=0
        for(var i = shift; i < size; i++) {
            arr2[j] = arr[i]
            j+=1   
        }
        
        // Shift the array and call  
        // findMissingPositive for 
        // positive part 
        return findMissingPositive(arr2, j)
}
function firstMissingInteger(A) {
    var size = A.length
    var missing = findMissing(A, size)
    return missing
}

var a = [0, 10, 2, -10, -20]
console.log(firstMissingInteger(a))
