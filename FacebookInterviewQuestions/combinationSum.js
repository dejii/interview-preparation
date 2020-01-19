function combinations(nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  generateCombinations(0, nums, [], 0, result, target);
  return result;
}
// function generateCombinations(index, nums, current, sum, result, target) {
//   if (sum > target) {
//     return;
//   }
//   //   console.log(sum);
//   // so we dont mutate it, we use a copy
//   if (sum === target) {
//     result.push(current.slice());
//   }
//   for (let i = index; i < nums.length; i++) {
//     if (i > index && nums[i] === nums[i - 1]) continue; // -duplicates
//     current.push(nums[i]);
//     // console.log(current);
//     generateCombinations(i + 1, nums, current, sum + nums[i], result, target);
//     current.pop();
//   }
// }
function generateCombinations(index, nums, current, sum, result, target) {
  //   console.log(sum);
  // so we dont mutate it, we use a copy
  if (sum === target) {
    result.push(current.slice());
  }
  for (let i = index; i < nums.length; i++) {
    // simulate taking the number at idx and not taking it, we back track when we pop
    current.push(nums[i]);
    // console.log(current);
    generateCombinations(
      i + 1,
      nums,
      current,
      sum + nums[i][1],
      result,
      target
    );
    current.pop();
  }
}

let map = new Map();
map.set("fish", 4.5);
map.set("fries", 2);
map.set("meat", 9);
let arr = [];
for (let [key, val] of map) {
  arr.push([key, val]);
  //   console.log(key, val);
}
// console.log(arr);
// let arr = [10, 1, 2, 7, 6, 1, 5];
console.log(combinations(arr, 11));
