const { PerformanceObserver, performance } = require("perf_hooks");

function reverse(str) {
  const arr = str.split("");
  const n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }
  return arr.join("");
}

function reverseEachWord(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    // words[i] = reverse(words[i]);
    words[i] = words[i]
      .split("")
      .reverse()
      .join("");
  }

  return words.join(" ");
}

var t0 = performance.now();
for (let i = 0; i < 1000; i++) {
  reverseEachWord("my room is small");
}
// console.log();
var t1 = performance.now();
console.log(
  "Call to reverseEachWord 1000000 times took " + (t1 - t0) + " milliseconds."
);
