function isValid(A) {
  function Stack() {
    this.items = [];
    var self = this;

    this.append = function(data) {
      self.items.push(data);
    };

    this.pop = function() {
      return self.items.pop();
    };

    this.top = function() {
      var length = self.items.length;
      if (length <= 0) {
        throw new Error("Empty Stack");
      } else {
        return self.items[length - 1];
      }
    };
  }
  var stack = new Stack();

  for (var i = 0; i < A.length; i++) {
    if (stack.items.length === 0) {
      stack.append(A[i]);
    } else if (stack.top() === "(" && A[i] === ")") {
      stack.pop();
    } else if (stack.top() === "[" && A[i] === "]") {
      stack.pop();
    } else if (stack.top() === "{" && A[i] === "}") {
      stack.pop();
    } else {
      stack.append(A[i]);
    }
  }
  return stack.items.length === 0 ? 1 : 0;
}

console.log(isValid("()(){"));
