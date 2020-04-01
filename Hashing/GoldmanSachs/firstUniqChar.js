function firstUniqueChar(string) {
    let s = string.toLowerCase()
    let single = []
    let removed = new Set()
    seen = new Set()
    
    for (let c in s) {}
        if c == ' ':
            continue
        if c in seen and c not in removed:
            single.remove(c)
            removed.add(c)
            continue
        single.append(c)
        seen.add(c)
}
    return single[0]
//   let s = string;
//   let states = Array(26).fill(-1);
//   let order = [];

//   for (let i = 0; i < s.length; i++) {
//     let char = s.charCodeAt(i) - 97;

//     if (states[char] === -1) {
//       order.push(char);
//       states[char] = i;
//     } else {
//       states[char] = -2;
//     }
//   }
//   console.log(states);

//   for (let i = 0; i < order.length; i++) {
//     let char = order[i];
//     let index = states[char];
//     if (index > -1) return char;
//   }

//   return -1;
  //   let map = new Map();

  //   for (let i = 0; i < string.length; i++) {
  //     if (map.has(string[i])) {
  //       map.set(string[i], 2);
  //     } else {
  //       map.set(string[i], 1);
  //     }
  //   }

  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] !== " " && map.has(string[i]) && map.get(string[i]) === 1) {
  //       return string[i];
  //     }
  //   }
  //   const str = string.toLowerCase();
  //   const letters = [];
  //   for (let i = 0; i < 26; i++) {
  //     letters.push(0);
  //   }
  //   for (let i = 0; i < string.length; i++) {
  //     if (str[i] !== "") {
  //       const ch = str.charCodeAt(i) - "a".charCodeAt(0);
  //       letters[ch]++;
  //     }
  //   }

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] !== "") {
  //       const ch = str.charCodeAt(i) - "a".charCodeAt(0);
  //       if (letters[ch] === 1) {
  //         return string[i];
  //       }
  //     }
  //   }

  //   return "";
  // }
}

console.log(firstUniqueChar(" deji"));
