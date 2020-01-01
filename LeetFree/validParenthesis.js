class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  append(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  top() {
    const length = this.items.length;
    return this.items[length - 1];
  }
}
var isValid = function(s) {
  const stack = new Stack();

  for (const n of s) {
    if (stack.isEmpty()) {
      stack.append(n);
    } else if (stack.top() === "(" && n === ")") {
      stack.pop();
    } else if (stack.top() === "[" && n === "]") {
      stack.pop();
    } else if (stack.top() === "{" && n === "}") {
      stack.pop();
    } else {
      stack.append(n);
    }
  }
  return stack.isEmpty();
};
