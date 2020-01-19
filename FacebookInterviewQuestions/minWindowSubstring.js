// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// function hasCharacterOccurence(s, t) {
//   // build map
//   let map = new Map();
//   for (let ch of t) {
//     if (!map.has(ch)) {
//       map.set(ch, 0);
//     }
//     map.set(ch, map.get(ch) + 1);
//   }

//   for (let ch of s) {
//     if (map.has(ch)) {
//       // reduce count
//       let count = map.get(ch) - 1;
//       if (count === 0) {
//         map.delete(ch);
//       } else {
//         map.set(ch, count);
//       }
//     }
//   }
//   return map.size === 0;
// }
// var minWindow = function(s, t) {
//   let min = Infinity;
//   let res = "";

//   for (let i = 0; i < s.length - t.length + 1; i++) {
//     for (let j = i; j < s.length; j++) {
//       let sub = s.substring(i, j + 1);

//       if (hasCharacterOccurence(sub, t) && sub.length < min) {
//         min = sub.length;
//         res = sub;
//       }
//     }
//   }
//   return res;
// };

var minWindow = function(s, t) {
  let requiredChars = new Map();
  for (let ch of t) {
    if (!requiredChars.has(ch)) {
      requiredChars.set(ch, 0);
    }
    requiredChars.set(ch, requiredChars.get(ch) + 1);
  }

  let windowChars = new Map();
  // console.log(requiredChars);

  let charsToMatch = requiredChars.size;
  let matchedWindow = 0;
  let left = 0;
  let right = 0;
  let minSoFar = Infinity;
  let minString = "";

  while (right < s.length) {
    let rightCh = s.charAt(right);

    if (!windowChars.has(rightCh)) {
      windowChars.set(rightCh, 0);
    }
    windowChars.set(rightCh, windowChars.get(rightCh) + 1);
    if (
      requiredChars.has(rightCh) &&
      windowChars.get(rightCh) === requiredChars.get(rightCh)
    ) {
      matchedWindow++;
    }
    // console.log(matchedWindow);
    while (matchedWindow === charsToMatch && left <= right) {
      let leftCh = s.charAt(left);
      let windowSize = right - left + 1;
      if (windowSize < minSoFar) {
        minSoFar = windowSize;
        minString = s.substring(left, right + 1);
      }
      // reduce window
      windowChars.set(leftCh, windowChars.get(leftCh) - 1);

      // was left ch a requirement?
      if (requiredChars.has(leftCh)) {
        // check if the window still fails the requiremnt
        if (windowChars.get(leftCh) < requiredChars.get(leftCh)) {
          matchedWindow--;
        }
      }
      left++;
    }
    right++;
  }
  return minString;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
