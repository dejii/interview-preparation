/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  let digits = [],
    letters = [];
  // split the logs into two parts: letters & digits
  logs.forEach(l => {
    let substr = l.substr(l.indexOf(" ") + 1);
    let isDigit = !isNaN(Number(substr.charAt(0)));
    if (isDigit) {
      digits.push(l);
    } else {
      letters.push(l);
    }
  });

  // sort letters perspectively
  letters.sort((a, b) => {
    let strA = a.substr(a.indexOf(" ") + 1);
    let strB = b.substr(b.indexOf(" ") + 1);

    if (strA === strB) return a.localeCompare(b);
    return strA.localeCompare(strB);
  });

  // push them together and return
  return [...letters, ...digits];
};
// function isDigit(ch) {
//     return (
//         ch.charCodeAt(0) >= "0".charCodeAt(0) &&
//         ch.charCodeAt(0) <= "9".charCodeAt(0)
//   );
// }
// function sortAlphaNum(a, b) {
//   var aA = a.replace(reA, "");
//   var bA = b.replace(reA, "");
//   if (aA === bA) {
//     var aN = parseInt(a.replace(reN, ""), 10);
//     var bN = parseInt(b.replace(reN, ""), 10);
//     return aN === bN ? 0 : aN > bN ? 1 : -1;
//   } else {
//     return aA > bA ? 1 : -1;
//   }
// }
// var reorderLogFiles = function(logs) {

//     logs.sort((s1, s2) => {
//         let s1SpaceIndex = s1.indexOf(' ');
//         let s2SpaceIndex = s2.indexOf(' ');
//         let id1 = s1.substring(0, s1SpaceIndex);
//         let id2 = s2.substring(0, s2SpaceIndex);
//         let split1 = s1.substring(s1SpaceIndex+1);
//         let split2 = s2.substring(s2SpaceIndex+1)
//         let isDigit1 = isDigit(split1.charAt(0));
//         let isDigit2 = isDigit(split2.charAt(0));

//         let ch1 = split1.charAt(0);
//         let ch2 = split2.charAt(0);

//         if (ch1 <= '9') {
//             if (ch2 <= '9') return 0;
//             else return 1;
//         }
//         if (ch2 <= '9') return -1;

//         let comp = split1.localeCompare(split2);
//         if (comp === 0) {
//             return id1.localeCompare(id2);
//         } else {
//             return comp;
//         }

// //         if (!isDigit1 && !isDigit2) {
// //             // letter log

// //             let comp = split1.localeCompare(split2);
// //             if (comp === 0) {
// //                 return id1.localeCompare(id2);
// //             } else {
// //                 return comp;
// //             }
// //         } else if (isDigit1 && isDigit2) {
// //             // both digit log
// //             return 0;
// //         } else if (isDigit1 && !isDigit2) {
// //             return 1;
// //         } else {
// //             return -1;
// //         }

//     });
//     return logs;

// };
