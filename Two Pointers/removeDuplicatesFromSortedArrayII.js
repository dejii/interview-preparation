function removeDuplicates(nums) {
  var i = 0;
  for (var n of nums) if (i < 2 || n > nums[i - 2]) nums[i++] = n;
  console.log(nums);
  return i;
}
var a = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7];
console.log(removeDuplicates(a));
