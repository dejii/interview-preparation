const reverseString = (input) => {
    const stringArray = input.split('');
    console.log(stringArray);

    for (let i = 0; i < Math.floor(stringArray.length / 2); i++) {
        let temp = input[i];
        stringArray[i] = stringArray[stringArray.length - i - 1];
        stringArray[stringArray.length - i - 1] = temp;
    }
    console.log(stringArray);

    return stringArray.join('');
};

const reverseWord = (input) => {
    const stringArray = input.split(' ');
    console.log(stringArray);

    for (let i = 0; i < Math.floor(stringArray.length / 2); i++) {
        let temp = stringArray[i];
        stringArray[i] = stringArray[stringArray.length - i - 1];
        stringArray[stringArray.length - i - 1] = temp;
    }
    console.log(stringArray);

    return stringArray.join(' ');
};

// console.log(reverseString('Mary'));
console.log(reverseWord(`Deji's is going to the market`));

function reverseStringUsingStack() {
    function Stack() {
        this.items = [];
        
        this.empty = function () {
            return this.items.length === 0;
        }
        
        this.add = function(item) {
            this.items.push(item);
        }
        
        this.peek = function(item) {
            return this.items[this.items.length - 1];
        }

        this.pop = function(item) {
            return this.items.pop();
        }
    }
    
    var ans = new Stack();
    var s = '' 
    
    for (var i = 0; i < A.length; i++) {
        // console.log(A[i])
        if (A[i] === ' ') {
            ans.add(s)
            s = ''
        } else {
            s += A[i]
        }
    }
    ans.add(s)

    
    
    var result = ''
    while(!ans.empty()) {
        result += ans.pop()
        if (ans.items.length > 0) {
            result += ' '
        }
    }
    
    return result
}