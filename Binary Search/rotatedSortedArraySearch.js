var findLowest = function (A) {
    const n = A.length;
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        const next = (mid + 1) % n;
        const prev = (mid + n - 1) % n;
        
        if (A[low] <= A[high]) {
            return low
        }
        
        if ((A[prev] > A[mid]) && A[mid] < A[next]) {
            return mid;
        } else if (A[mid] < A[high]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
}

var binarySearch = function (arr, elem, rot) {
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const realmid = (mid + rot) % arr.length;
        if (arr[realmid] === elem) {
            return realmid;
        } else if (elem < arr[realmid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return -1;
}

var search = function(nums, target) {
    // const i = findLowest(nums);
    // console.log(i)
    // const x = binarySearch(nums.slice(i), target);
    // if (x !== -1) {
    //     return x + i;
    // } else {
    //     return binarySearch(nums.slice(0, i), target);
    // }
    const rot = findLowest(nums);
    return binarySearch(nums, target, rot);
};

let a = [4,5,6,7,0,1,2]
let b = 0
console.log(search(a,b))
