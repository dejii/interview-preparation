/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let result = 0;
  let sum = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      result += map.get(sum - k);
    }
    if (!map.has(sum)) {
      map.set(sum, 0);
    }
    map.set(sum, map.get(sum) + 1);
  }
  return result;
  //     let result = 0;
  //     for (let i = 0; i < nums.length; i++) {
  //         let sum = 0;
  //         for (let j = i; j < nums.length; j++) {
  //             sum += nums[j];

  //             if (sum === k) {
  //                 result++;
  //             }
  //         }
  //     }
  //     return result;
};

/*
            1. Hashmap<sum[0,i - 1], frequency>
            2. sum[i, j] = sum[0, j] - sum[0, i - 1]    --> sum[0, i - 1] = sum[0, j] - sum[i, j]
                   k           sum      hashmap-key     -->  hashmap-key  =  sum - k
            3. now, we have k and sum.  
                  As long as we can find a sum[0, i - 1], we then get a valid subarray
                 which is as long as we have the hashmap-key,  we then get a valid subarray
            4. Why don't map.put(sum[0, i - 1], 1) every time ?
                  if all numbers are positive, this is fine
                  if there exists negative number, there could be preSum frequency > 1
        */

/**
 * The idea behind this approach is as follows: If the cumulative sum(repreesnted by sum[i]sum[i] for sum upto i^{th}i 
th
  index) upto two indices is the same, the sum of the elements lying in between those indices is zero.
   Extending the same thought further, if the cumulative sum upto two indices, say ii and jj 
   is at a difference of kk i.e. if sum[i] - sum[j] = ksum[i]−sum[j]=k, the sum of elements lying
    between indices ii and jj is kk.

Based on these thoughts, we make use of a hashmap mapmap which is used to store the cumulative 
sum upto all the indices possible along with the number of times the same sum occurs
 We store the data in the form: (sum_i, no. of occurences of sum_i)(sum i,no.ofoccurencesofsum i
​	
 ). We traverse over the array numsnums and keep on finding the cumulative sum. 
 Every time we encounter a new sum, we make a new entry in the hashmap corresponding to that sum.
  If the same sum occurs again, we increment the count corresponding to that sum in the hashmap. 
  Further, for every sum encountered, we also determine the number of times the sum sum-ksum−k has
   occured already, since it will determine the number of times a subarray with sum kk has occured
    upto the current index. We increment the countcount by the same amount.

After the complete array has been traversed, the countcount gives the required result.
 */

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
