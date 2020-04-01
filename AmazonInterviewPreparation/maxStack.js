class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  push(x) {
    let max =
      this.maxStack.length === 0 ? x : this.maxStack[this.maxStack.length - 1];
    this.stack.push(x);
    this.maxStack.push(max > x ? max : x);
  }
  pop() {
    this.maxStack.pop();
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }
  popMax() {
    let max = this.peekMax();
    let temp = [];
    while (this.top() !== max) {
      temp.push(this.pop());
    }
    this.pop();
    while (temp.length > 0) {
      this.push(temp.pop());
    }
    return max;
  }
}

let stack = new MaxStack();
stack.push(5);
stack.push(1);
stack.push(5);
console.log(stack.top());
console.log(stack.popMax());
console.log(stack.top());
console.log(stack.peekMax());
console.log(stack.pop());
console.log(stack.top());
