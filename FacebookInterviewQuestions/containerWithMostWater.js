var maxAreaBruteForce = function(height) {
  let max = -Infinity;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let min = Math.min(height[i], height[j]);
      max = Math.max(max, min * (j - i));
    }
  }

  return max;
};

var maxArea = function(height) {
  let max = -Infinity;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    let min = Math.min(height[i], height[j]);
    max = Math.max(max, min * (j - i));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};
