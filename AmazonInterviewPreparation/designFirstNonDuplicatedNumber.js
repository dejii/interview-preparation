class Solution {
  constructor() {
    this.items = [];
    this.store = new Set();
  }

  add(num) {
    this.items.push(num);
    if (!this.store.has(num)) {
      this.store.add(num);
    } else {
      this.store.delete(num);
    }
  }

  getFirstNonDuplicatedNumber() {
    let iter = this.store.values();
    return iter.next().value;
  }
}

let s = new Solution();
s.add(1);
s.add(2);
s.add(3);
console.log(s.getFirstNonDuplicatedNumber()); // 1
s.add(1);
console.log(s.getFirstNonDuplicatedNumber()); // 2
s.add(4);
s.add(5);
s.add(6);
s.add(2);
s.add(3);
s.add(4);
console.log(s.getFirstNonDuplicatedNumber()); // 5
s.add(7);
