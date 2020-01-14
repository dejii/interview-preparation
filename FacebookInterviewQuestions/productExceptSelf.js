var productExceptSelf = function(nums) {
  const n = nums.length;
  let p = 1;
  let q = 1;
  let before = [];
  let after = [];
  for (let i = 0; i < n; i++) {
    before.push(p);
    p *= nums[i];

    after.push(q);
    q *= nums[n - 1 - i];
  }
  after.reverse();

  for (let i = 0; i < n; i++) {
    nums[i] = before[i] * after[i];
  }

  return nums;
};

var productExceptSelf = function(nums) {
  let res = [];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    res.push(1);
  }
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] = res[i] * right;
    right = right * nums[i];
  }
  return res;
};
console.log(productExceptSelf([1, 2, 3, 4]));

/*
Suppose you have numbers:
Numbers [1 2 3 4 5]
Pass 1: [- 1 12 123 1234]
Pass 2: [2345 345 45 5 -]

Finally, you multiply ith element of both the lists to get:
Pass 3: [2345, 1345, 1245, 1235, 1234]
*/
