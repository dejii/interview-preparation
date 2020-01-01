function restock(itemCount, target) {
  // Write your code here
  let itemsTotal = itemCount.reduce((acc, val) => acc + val, 0);
  let currentSum = 0;
  for (let i = 0; i < itemCount.length; i++) {
    currentSum += itemCount[i];
    if (currentSum >= target) {
      return currentSum - target;
    }
  }
  return target - itemsTotal;
}

console.log(restock([10, 20, 30, 40, 15], 80));
