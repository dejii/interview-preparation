/**
 * @param {string} path
 * @return {string}
 */
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
var simplifyPath = function(path) {
  path = path.split("/");
  const stack = new Stack();
  for (const p of path) {
    if (p === "" || p === ".") {
      continue;
    } else if (p === "..") {
      stack.pop();
    } else {
      stack.append(p);
    }
  }

  return "/" + stack.items.join("/");
};

console.log(simplifyPath("/home//foo/"));
