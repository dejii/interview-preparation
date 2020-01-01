
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    allItems() {
        var result = [];
        for (var i = 0; i < this.items.length; i++) {
            result.push([this.items[i].start, this.items[i].end]);
        }
        return result;
    }
    isEmpty() {
        // return true if stack is empty 
        return this.items.length === 0;
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}


class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

/*
1. Sort the intervals based on increasing order of 
    starting time.
2. Push the first interval on to a stack.
3. For each interval do the following
   a. If the current interval does not overlap with the stack 
       top, push it.
   b. If the current interval overlaps with stack top and ending
       time of current interval is more than that of stack top, 
       update stack top with the ending  time of current interval.
4. At the end stack contains the merged intervals. 
*/

function mergeOverlappingIntervals(intervals) {
    var n = intervals.length
    var A = []
    // convert to interval objects
    for (var i = 0; i < n; i++) {
        var interval = new Interval(intervals[i][0], intervals[i][1])
        A.push(interval)
    }
    
    // A is an array of [a,b]

    // sorting based on starting time
    A = A.sort(function(x, y) {
        if (x.start < y.start) {
            return -1
        } else if (x.start > y.start) {
            return 1
        } else {
            return 0
        }
    })

    var stack = new Stack()
    // push the first interval to stack 
    stack.push(A[0])

    // Start from the next interval and merge if necessary 
    for (var i = 1 ; i < n; i++) 
    { 
        // get interval from stack top 
        var top = stack.peek() 
  
        // if current interval is not overlapping with stack top, 
        // push it to the stack 
        if (top.end < A[i].start) 
            stack.push(A[i]); 
  
        // Otherwise update the ending time of top if ending of current 
        // interval is more 
        else if (top.end < A[i].end) 
        { 
            top.end = A[i].end; 
            stack.pop(); 
            stack.push(top); 
        } 
    } 

    return stack.allItems()
}

var a = [[1,3],[5,7], [6,8], [2,4]]
console.log(mergeOverlappingIntervals(a))