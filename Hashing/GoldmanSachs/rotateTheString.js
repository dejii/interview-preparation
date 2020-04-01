function rotateLeft(arr, times, n) {
  times = times % n;

  let temp = arr.slice(times).concat(arr.slice(0, times));
  return temp;
}
function rotateRight(arr, times, n) {
  times = times % n;

  let temp = arr.slice(n - times).concat(arr.slice(0, n - times));
  return temp;
}

function rotateTheString(originalString, direction, amount) {
  // Write your code here
  let n = originalString.length;

  let result = originalString.split("");
  let rot = 0;
  let m = direction.length;
  for (let i = 0; i < m; i++) {
    if (direction[i] === 0) {
      rot -= amount[i];
    } else {
      rot += amount[i];
    }
  }
  if (rot < 0) {
    result = rotateLeft(result, Math.abs(rot), n);
  } else if (rot > 0) {
    result = rotateRight(result, Math.abs(rot), n);
  }

  return result.join("");
}
