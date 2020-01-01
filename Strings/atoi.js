

function atoi(A) {
    if (!A) {
        return 0
    }
    var n = A.length
    var maxInt = Math.pow(2, 31) - 1;
    var minInt = -Math.pow(2, 31);
    // console.log(maxInt,minInt)
    
    var index = 0;
    var total = 0;
    var sign = 1
    while(index < n && A.charAt(index) === ' ') {
        index++
    }
    
    if (index == A.length) return 0;
    
    if(A.charAt(index) == '+' || A.charAt(index) == '-') {
        sign = A.charAt(index) == '+' ? 1 : -1;
        index++;
    }
    
    while(index < A.length) {
            var digit = A.charCodeAt(index) - '0'.charCodeAt(0);
            if(digit < 0 || digit > 9) break;
            // check for overflow
            if((Math.floor(maxInt / 10) < total) || ((Math.floor(maxInt / 10) === total) && (maxInt % 10 < digit))) {
                // console.log('here')
              return sign === 1 ? maxInt : minInt;   
            }
            
            total = total*10 + digit;
            index++;
        }
    return total*sign;

    // return result
}

var a = '114748368'
console.log(atoi(a))