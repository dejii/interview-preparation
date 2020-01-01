function trap(height) {
  const n = height.length;
  const left = new Array(n);
  const right = new Array(n);
  let result = 0;

  left[0] = height[0];
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]);
  }

  right[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]);
  }
  console.log(left);
  console.log(right);
  console.log(height);

  for (let i = 0; i < n; i++) {
    result += Math.min(left[i], right[i]) - height[i];
  }

  return result;
}

function trap2(A) {
  const n = A.length;
  let result = 0;
  var maxLeft = 0;
  var maxRight = 0;
  var left = 0;
  var right = n - 1;
  while (left <= right) {
    if (A[left] <= A[right]) {
      if (A[left] >= maxLeft) {
        maxLeft = A[left];
      } else {
        result += maxLeft - A[left];
      }
      left++;
    } else {
      if (A[right] >= maxRight) {
        maxRight = A[right];
      } else {
        result += maxRight - A[right];
      }
      right--;
    }
  }
  console.log(maxLeft, maxRight);
  return result;
}

const a = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap2(a));
