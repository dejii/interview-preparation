/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let map = new Map();

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 0);
    }
    map.set(num, map.get(num) + 1);
  }
  let idx = 0;
  for (let color of [0, 1, 2]) {
    let count = map.get(color);
    while (count > 0) {
      nums[idx] = color;
      count--;
      idx++;
    }
  }
};

/**
 *    public void sortColors(int[] A) {
       if(A==null || A.length<2) return;
       int low = 0; 
       int high = A.length-1;
       for(int i = low; i<=high;) {
           if(A[i]==0) {
              // swap A[i] and A[low] and i,low both ++
              int temp = A[i];
              A[i] = A[low];
              A[low]=temp;
              i++;low++;
           }else if(A[i]==2) {
               //swap A[i] and A[high] and high--;
              int temp = A[i];
              A[i] = A[high];
              A[high]=temp;
              high--;
           }else {
               i++;
           }
       }
   }

   var wiggleSort = function(nums) {
    for(var i = 1; i < nums.length; i++) {
        if ((i % 2) ^ (nums[i] > nums[i - 1]))
            swap(nums, i);
    }
};

var swap = function(nums, i) {
    var temp = nums[i];
    nums[i] = nums[i - 1];
    nums[i - 1] =  temp;  
};
 */
