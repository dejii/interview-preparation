/**
  * 
  * Just met the question in my last Friday's interview. Seems like the variation of LC591, a hard one. The question asked to return the valid first N chars, like if N = 30, it is shown in the snapshot, if N is 2, none is valid, so return "". If N is 7, return < p></ p>. Each char counts for 1.

I do not manage to solve it in the interview (performed well in the first round), so I got an additional interview. Does anyone know how to solve it?



  * <p>The <b>quick</b> brown <i>fox</i> jumps over a lazy dog.</p>
  */

function isLetter(str) {
  return "a" <= str && str <= "z";
}

function htmlSnippet(s, n) {
  let result = [];
  let stack = [];
  let i = 0;
  while (i < n - 3) {
    if (s.charAt(i) === "<" && s.charAt(i + 1) !== "/") {
      stack.push(s.charAt(i + 1));
      result.push(s.substring(i, i + 3));
      i += 3;
    } else if (s.charAt(i) === "<" && s.charAt(i + 1) === "/") {
      stack.pop();
      result.push(s.substring(i, i + 4));
      i += 4;
    } else {
      result.push(s.charAt(i));
      i++;
    }
  }
  if (stack.length === 1) {
    let closing = stack[0];
    result.push(`</${closing}>`);
  }
  return result.join("");
}

let s = "<p> The <b>quick</b> brown <i>fox</i> jumps over a lazy dog.</p>";
console.log(htmlSnippet(s, 7));
