/*
    When the array of numbers is sorted
*/
// 
const twoSumSorted = (arr, num) => {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        const s = arr[low] + arr[high];

        if (s === num) {
            return true;
        } else if (s < num) {
            low +=1;
        } else if (s > num) {
            high -= 1;
        }
    }
    return false;
};

/*
    When the array of numbers is not sorted
*/
//[1, 2, 4, 6, 20]; target = 10
const twoSum = (arr, sum) => {
    const compMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (compMap.has(arr[i])) {
            // return true;
            return [compMap.get(arr[i]), arr[i]];
        } else {
            compMap.set(sum - arr[i], arr[i]);
        }
    }
    // return false;
    return []
};

const input = [1, 2, 4, 6, 20];

console.log(twoSum(input, 10))