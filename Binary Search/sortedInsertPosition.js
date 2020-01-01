

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length;
    
    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        console.log(mid)
        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
}
let a = [1,3,5,6]
let b = 7
console.log(searchInsert(a, b))