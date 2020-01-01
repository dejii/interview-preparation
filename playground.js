function bitCount(num) {
  let count = 0;
  for (let i = 0; i < 31; i++) {
    const mask = 1 << i;
    if (mask & num) count++;
  }
  return count;
}

const n = 83205678;
const initialCount = bitCount(n);
const max32int = Math.pow(2, 31) - 1;

// for (let i = n + 1; i < max32int; i++) {
//   if (initialCount === bitCount(i)) {
//     // console.log(i);
//     return;
//   }
// }

const x = [1, 2, 3];

for (let i = 0; i < x.length; i++) {}

for (let n of x) {
  console.log(n);
}
