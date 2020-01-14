/**
 * @param {string} s
 * @return {number}
 */
function isDigit(str) {
  return (
    str.charCodeAt(0) >= "0".charCodeAt(0) &&
    str.charCodeAt(0) <= "9".charCodeAt(0)
  );
}
var calculate = function(s) {
  let stack = [];
  let num = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (isDigit(ch)) {
      num = num * 10 + ch.charCodeAt(0) - "0".charCodeAt(0);
      console.log(num);
    }

    if ((!isDigit(ch) && ch !== " ") || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        let lastDigit = stack.pop();
        let lastSign = lastDigit < 0 ? -1 : 1;
        lastDigit = Math.abs(lastDigit);

        stack.push(lastSign * Math.floor(lastDigit / num));
      }
      sign = ch;
      num = 0;
    }
    console.log(stack);
  }
  let result = 0;
  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
  }

  return result;
};
// console.log(calculate("3+2*2"));
console.log(calculate("14-3/2"));
// console.log(isDigit("2"));
/*
public class Solution {
public int calculate(String s) {
    int len;
    if(s==null || (len = s.length())==0) return 0;
    Stack<Integer> stack = new Stack<Integer>();
    int num = 0;
    char sign = '+';
    for(int i=0;i<len;i++){
        if(Character.isDigit(s.charAt(i))){
            num = num*10+s.charAt(i)-'0';
        }
        if((!Character.isDigit(s.charAt(i)) &&' '!=s.charAt(i)) || i==len-1){
            if(sign=='-'){
                stack.push(-num);
            }
            if(sign=='+'){
                stack.push(num);
            }
            if(sign=='*'){
                stack.push(stack.pop()*num);
            }
            if(sign=='/'){
                stack.push(stack.pop()/num);
            }
            sign = s.charAt(i);
            num = 0;
        }
    }

    int re = 0;
    for(int i:stack){
        re += i;
    }
    return re;
}
*/
