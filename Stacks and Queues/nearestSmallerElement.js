function nearestSmallerElement(A) {
  function Stack() {
    this.items = [];
    var self = this;

    this.append = function(data) {
      return self.items.push(data);
    };
    this.pop = function() {
      return self.items.pop();
    };
    this.empty = function() {
      return self.items.length === 0;
    };
    this.top = function() {
      var len = self.items.length;
      return self.items[len - 1];
    };
  }

  var stack = new Stack();
  var ans = [];
  for (var i = 0; i < A.length; i++) {
    while (!stack.empty() && stack.top() >= A[i]) {
      stack.pop();
    }
    if (stack.empty()) {
      ans.push(-1);
    } else {
      ans.push(stack.top());
    }
    stack.append(A[i]);
  }
  return ans;
}
