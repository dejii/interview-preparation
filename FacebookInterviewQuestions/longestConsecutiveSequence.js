var longestConsecutive = function(nums) {
  let map = new Map();
  let max = 0;
  for (let num of nums) {
    if (!map.has(num)) {
      let prev = map.has(num - 1) ? map.get(num - 1) : 0;
      let next = map.has(num + 1) ? map.get(num + 1) : 0;
      let count = prev + next + 1;

      map.set(num, count);
      max = Math.max(max, count);
      map.set(num - prev, count);
      map.set(num + next, count);
    } else {
      continue;
    }
  }
  // console.log(map);
  return max;
};

// ALTERNATIVE SET SOLUTION USING COUNTING UPPER BOUND AND LOWER BOUND FOR EACH

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([1, 2, 0, 1]));
