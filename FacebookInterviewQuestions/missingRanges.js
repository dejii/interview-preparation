// [0, 1, 3, 50, 75], return [“2”, “4->49”, “51->74”, “76->99”]/
function missingRanges(nums) {
  let set = new Set(nums);
  let i = 0;
  let result = [];
  while (i < 99) {
    let start = i;
    if (!set.has(i)) {
      while (!set.has(i) && i <= 99) {
        i++;
      }
      if (i - start > 1) {
        result.push(`${start}->${i - 1}`);
      } else {
        result.push(`${i - 1}`);
      }
    } else {
      i++;
    }
  }
  return result;
}

console.log(missingRanges([0, 1, 2, 3, 50, 55, 75]));
