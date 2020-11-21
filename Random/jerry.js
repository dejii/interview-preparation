function solution(n, badNumbers, lower, upper) {
  let nums = badNumbers;
  let next = lower;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < next) {
      continue;
    } else if (nums[i] == next) {
      next++;
    } else { // nums[i] > next
      res.push(getRange(next, nums[i] - 1));
      next = nums[i] + 1;
    }
  }

  if (next <= upper) {
    res.push(getRange(next, upper));
  }

  return res;
}
function getRange(n1, n2) {
  return (n1 === n2) ? String(n1) : `${n1}-${n2}`;
}

console.log(solution(6, [37, 7, 22, 15, 49, 60], 3, 48));
