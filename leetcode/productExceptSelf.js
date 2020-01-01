var productExceptSelf = function(nums) {
  var result = [];
  var leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }
  console.log(result);
  var rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * rightProduct;
    console.log(rightProduct);
    rightProduct *= nums[i];
  }

  return result;
  // 1  1   2 6
  // 24 12  4 1
  // 24 12  8 6
};

var a = [1, 2, 3, 4];
console.log(productExceptSelf(a));
