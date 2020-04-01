function rotateLeft(arr, times, n) {
  times = times % n;

  let temp = arr.slice(times).concat(arr.slice(0, times));
  arr = temp;
  return temp;
}
function rotateRight(arr, times, n) {
  times = times % n;

  let temp = arr.slice(n - times).concat(arr.slice(0, n - times));
  arr = temp;
  return temp;
}

function rotateTheString(originalString, direction, amount) {
  // Write your code here
  let n = originalString.length;

  let result = originalString.split("");
  let m = direction.length;
  for (let i = 0; i < m; i++) {
    if (direction[i] === 0) {
      rotateLeft(result, amount[i], n);
    } else if (direction[i] === 1) {
      rotateRight(result, amount[i], n);
    }
  }

  return result.join("");
}

// console.log(rotateTheString("hurart", [0, 1], [4, 1]));
let arr = "hurart".split("");
// console.log(arr);
console.log(rotateLeft(arr, 3, arr.length));
// console.log(arr);
