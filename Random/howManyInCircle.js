function calculateDistanceFromOrigin(point) {
  let [x, y] = point;
  return Math.pow(x, 2) + Math.pow(y, 2);
}

function cirleCount(S, X, Y) {
  let points = [];
  for (let i = 0; i < X.length; i++) {
    points.push([X[i], Y[i]]);
  }
  let dists = [];
  let map = new Map();
  for (let point of points) {
    let distance = calculateDistanceFromOrigin(point);
    dists.push(distance);
    if (map.has(distance)) {
      map.set(distance, map.get(distance) + 1);
    } else {
      map.set(distance, 1);
    }
  }

  let arr = [];
  for (let i = 0; i < dists.length; i++) {
    let val = dists[i];
    if (map.get(val) === 1) {
      arr.push([dists[i], S[i]]);
    }
  }
  arr = arr.sort((x, y) => x[0] - y[0]);

  let seen = new Set();
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i][1];
    if (seen.has(letter)) {
      break;
    }
    count++;
    seen.add(letter);
  }
  return count;
}

// let S = "ABDCA";
// let X = [2, -1, -4, -3, 3];
// let Y = [2, -2, 4, 1, -3];

// let S = "ABB";
// let X = [1, -2, -2];
// let Y = [1, -2, 2];

let S = "CCD";
let X = [1, -1, 2];
let Y = [1, -1, -2];
console.log(cirleCount(S, X, Y));
