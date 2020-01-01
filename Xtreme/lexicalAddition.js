function getCount(num, x) {
  let sum = 0;
  let count = 0;
  while (sum < num) {
    sum += x;
    count++;
  }
  return count;
}

function getArray(n, count) {
  let res = [];
  for (let i = 0; i < count; i++) {
    res.push(n);
  }
  return res;
}

function validSum(arr, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum === target;
}

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// function main(N, A, B) {
//   let temp = A;
//   let arr = [];
//   while (temp <= B) {
//     let n = getCount(N, temp);
//     arr.push(...getArray(temp, n));
//     temp++;
//   }

//   let ans = null;

//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     console.log("her");
//     let mid = start + Math.floor((end - start) / 2);
//     let leftArr = arr.slice(start, mid);
//     let rightArr = arr.slice(mid);
//     let m = validSum(leftArr);
//     let n = validSum(rightArr);
//     let leftSum = getSum(leftArr);
//     let rightSum = getSum(rightArr);
//     let ans = null;

//     if (m && n) {
//       if (leftArr.length <= rightArr.length) {
//         if (ans.length > leftArr.length) {
//           ans = leftArr;
//         }

//         end = mid - 1;
//       } else {
//         if (ans.length > rightArr.length) {
//           ans = rightArr;
//         }
//         start = mid + 1;
//       }
//     } else if (m) {
//       if (ans.length > leftArr.length) {
//         ans = leftArr;
//       }
//       end = mid - 1;
//     } else if (n) {
//       if (ans.length > leftArr.length) {
//         ans = leftArr;
//       }

//       start = mid + 1;
//     } else {
//       if (leftSum < N) {
//         console.log(arr.slice(start, end));
//         start = mid + 1;
//       } else {
//         console.log(arr.slice(start, end));
//         end = mid - 1;
//       }
//     }
//   }

//   return ans;
// }

function main(N, A, B) {
  let temp = A;
  let arr = [];
  while (temp <= B) {
    let n = getCount(N, temp);
    arr.push(...getArray(temp, n));
    temp++;
  }

  let ans = null;

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    let s = arr.slice(start, end + 1);
    console.log(s);
    if (validSum(s, N)) {
      if (ans && ans.length > s.length) {
        ans = s;
      }
    }
    if (getSum(s) <= N) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

// console.log(getCount(59, 8));
console.log(main(59, 8, 10));
// console.log(validSum([8, 8, 8], 24));
