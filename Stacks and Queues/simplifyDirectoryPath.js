function simplifyPath(A) {
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
    this.empty = function() {
      return self.items.length === 0;
    };
  }
  var length = A.length;
  var lastString = A[length - 1];
  if (lastString === "/") {
    A = A.substring(1, length - 1);
  } else {
    A = A.substring(1);
  }
  var arr = A.split("/");
  //   console.log(arr);
  const stack = new Stack();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      continue;
    } else if (arr[i] === ".") {
      continue;
    } else if (arr[i] === "..") {
      if (!stack.empty()) {
        stack.pop();
      }
    } else {
      stack.append(arr[i]);
    }
  }
  return stack.empty() ? "/" : "/" + stack.items.join("/");
}

// var a = "/a/./b/../../c/";
var a = "//deji//";
console.log(simplifyPath(a));
