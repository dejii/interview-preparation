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
  this.length = function() {
    return self.items.length;
  };
}

// const m = nextInt();
// const n = nextInt();
const m = 4;
let A = [];
// for (let i = 0; i < m; i++) {
//   A.push(nextString());
// }
A = ["CA", "BD", "CB", "CD"];
const stack = new Stack();
for (const a of A) {
  if (stack.length() >= 2) {
    l2 = stack.pop();
    l1 = stack.pop();
    console.log(l1, l2);
    if (l1.length === 2 && l2.length === 2) {
      //   console.log(l1[l1.length - 1]);
      //   console.log(l2[0]);
      if (l1[l1.length - 1] < l2[0]) {
        const m = l1 + l2;
        stack.append(m);
        // continue
      } else {
      }
    } else {
      stack.append(l1);
      stack.append(l2);
    }
  }
  stack.append(a);
  console.log(stack.items);
}

console.log(stack.items);
