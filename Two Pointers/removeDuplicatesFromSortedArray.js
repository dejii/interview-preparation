function removeDuplicates(nums) {
  var i = 1; //iterator thru array
  var j = 0; //current index
  for (; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      //new number
      j++; //move current index
      nums[j] = nums[i]; //fill current index with new number
    }
  }
  //   console.log(nums);
  //   return j + 1;
  nums.splice(j, nums.length - j - 1);
  return nums;
}
var a = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7];
console.log(removeDuplicates(a));
