/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        result++;
      }
    }
  }
  return result;
};

/*
public int maxProduct(int[] nums) {
    int[] max = new int[nums.length];
    int[] min = new int[nums.length];
 
    max[0] = min[0] = nums[0];
    int result = nums[0];
 
    for(int i=1; i<nums.length; i++){
        if(nums[i]>0){
            max[i]=Math.max(nums[i], max[i-1]*nums[i]);
            min[i]=Math.min(nums[i], min[i-1]*nums[i]);
        }else{
            max[i]=Math.max(nums[i], min[i-1]*nums[i]);
            min[i]=Math.min(nums[i], max[i-1]*nums[i]);
        }
 
        result = Math.max(result, max[i]);
    }
 
    return result;
}

public int getLargestSumCloseToK(int[] arr, int k){
    int sum=0;
    TreeSet<Integer> set = new TreeSet<Integer>();
    int result=Integer.MIN_VALUE;
    set.add(0);
 
    for(int i=0; i<arr.length; i++){
        sum=sum+arr[i];
 
        Integer ceiling = set.ceiling(sum-k);
        if(ceiling!=null){
            result = Math.max(result, sum-ceiling);        
        }
 
        set.add(sum);
    }
 
    return result;
}

public int maxSubArrayLen(int[] nums, int k) {
    HashMap<Integer, Integer> map = new HashMap<>();
    map.put(0, -1);
    int result = 0;
    int sum = 0;
 
    for(int i=0; i<nums.length; i++){
        sum += nums[i];
        if(map.containsKey(sum - k)){
            result = Math.max(result, i - map.get(sum - k));
        }
        map.putIfAbsent(sum, i);
    }
 
    return result;
}
*/
