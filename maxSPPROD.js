function Stack() {
    this.items = [];
}

Stack.prototype.push = function(item) {
    this.items.push(item);
}
Stack.prototype.pop = function () {
    if (this.items.length === 0) {
        return "Underflow"
    }
    return this.items.pop();
}
Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
}
Stack.prototype.isEmpty = function() {
    // return true if stack is empty 
    return this.items.length === 0; 
} 
Stack.prototype.printStack = function() { 
    var str = ""; 
    for (var i = 0; i < this.items.length; i++) 
        str += this.items[i] + " "; 
    return str; 
} 

function firstGreater(A, prev) {
    var ans = [];
    var stack = new Stack()

    // assume all indexes to be zero
    for (var i = 0; i < A.length; i++) {
        ans[i] = 0
    }
    // console.log(ans)

    // if prev=true, we are looking for the next greater index to the left
    // so we set our loop range accordingly
    var i = prev ? 0 : A.length - 1
    var end = prev ? A.length - 1 : - 1
    // console.log('i ', i)
    // console.log('end ', end)
    // console.log('prev', prev)
    // console.log(stack.items.length)

    // if prev=true, we loop from 0 to end else we loop downwards from end to 0
    for (i; prev ? i < end : i > end; prev ? i++ : i--) {
        console.log(i)

        while(stack.items.length && A[i] >= A[stack.peek()]) {
            stack.pop()
        }
        ans[i] = stack.items.length ? stack.peek() : 0
        stack.push(i)
    }
    return ans

}

function maxSpecialProduct(A) {
    var left = firstGreater(A, true)
    var right = firstGreater(A, false)
    var max = -Infinity
    console.log(left)
    console.log(right)

    // update max
    for (var i = 0; i < A.length; i++) {
        max = Math.max(max, left[i] * right[i])
    }

    return max
}

var a = [ 5, 9, 6, 8, 6, 4, 6, 9, 5, 4, 9 ]
console.log(maxSpecialProduct(a))