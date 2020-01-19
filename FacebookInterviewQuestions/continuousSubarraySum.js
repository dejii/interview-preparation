/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let preSum = new Array(nums.length + 1).fill(0);
  for (let i = 1; i <= nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  console.log(preSum);
  for (let i = 0; i < nums.length; i++) {
    // of size 2
    for (let j = i + 2; j <= nums.length; j++) {
      if (k == 0) {
        if (preSum[j] - preSum[i] == 0) {
          return true;
        }
      } else if ((preSum[j] - preSum[i]) % k == 0) {
        return true;
      }
    }
  }
  return false;
};
/**
 * public boolean checkSubarraySum(int[] nums, int k) {
 * // corner case: if the very first subarray with first two numbers in array could form
 * the result, we need to 
    // put mod value 0 and index -1 to make it as a true case
    Map<Integer, Integer> map = new HashMap<Integer, Integer>(){{put(0,-1);}};;
    int runningSum = 0;
    for (int i=0;i<nums.length;i++) {
        runningSum += nums[i];
        if (k != 0) runningSum %= k; 
        Integer prev = map.get(runningSum);
        if (prev != null) {
            if (i - prev > 1) return true;
        }
        else map.put(runningSum, i);
    }
    return false;
}

@ohuohuo This is one of those magics of remainder theorem :)

(a+(n*x))%x is same as (a%x)

For e.g. in case of the array [23,2,6,4,7] the running sum is [23,25,31,35,42] and the 
remainders are [5,1,1,5,0]. We got remainder 5 at index 0 and at index 3. That means, in 
between these two indexes we must have added a number which is multiple of the k. Hope this 
clarifies your doubt :)
 */
