/*
Find if Given number is power of 2 or not. 
More specifically, find if given number can be expressed as 2^k where k >= 1.

Input:

number length can be more than 64, which mean number can be greater than 2 ^ 64 (out of long long range)
Output:

return 1 if the number is a power of 2 else return 0

Example:

Input : 128
Output : 1
*/

/*
4096
2048
1024
512
256
128
64
32
16
8
4
2
1

*/

function divideByTwo(A) {
    var i = 0;
    var n = A.length;

    var result = ''
    var div = A
    while(i < n) {
        // if (!A[i]) {
        //     break
        // }
        // console.log(A)
        if (parseInt(div[i]) === 0) {
            result += '0';
            A = A.substring(1)
            i++
        } else if (parseInt(div[i]) >= 2) {
            result += Math.floor(parseInt(div[i]) / 2)
        
            var remainder = parseInt(div[i]) % 2
            A = A.substring(1);
        
            if (remainder !== 0) {
                A = '' + remainder + A;
                i++
            } else {
                i++
            }
            // console.log(A)
        } else {
            result += Math.floor(parseInt(div[i] + div[i + 1]) / 2);
            // console.log(result)
            var remainder = parseInt(div[i] + div[i + 1]) % 2
            A = A.substring(2);
            // console.log(A)
            if (remainder !== 0) {
                A = '' + remainder + A;
                i++
            } else {
                i+=2
            }
            // console.log(remainder, A)
            // console.log(i)
        }
    }

    return result

}

function powerOfTwo(A) {
    
    while (A.length > 3 || parseInt(A) > 0) {
        A = divideByTwo(A)
        console.log(A)
        if (A.length === 1 && parseInt(A) === 2) {
            return 1
        }
    }

    return 0

    
}

var a = '5070602400912917605986812821504'
// var a = '150'
// console.log(powerOfTwo(a))
// console.log(divideByTwo(a))

function longDivision(A, divisor) {
    // Find prefix of number that is  
    // larger than divisor. 
    var idx = 0;
    var ans = ''; 

    var temp = A[idx].charCodeAt(0) - '0'.charCodeAt(0);
    while (temp < divisor) {
        temp = temp * 10 + (A[idx + 1].charCodeAt(0) - '0'.charCodeAt(0))
        idx++
    }
    idx++
    // console.log(idx)

    // Repeatedly divide divisor with temp. After  
    // every division, update temp to include one  
    // more digit. 
    while (A.length > idx) { 
        // Store result in answer i.e. temp / divisor 
        ans += Math.floor(temp / divisor);
        
        // console.log(temp);
        // Take next digit of number 
        temp = (temp % divisor) * 10 + A[idx].charCodeAt(0) - '0'.charCodeAt(0); 
        idx++
        // console.log(temp);
    } 
    ans += String.fromCharCode(Math.floor(temp / divisor) + '0'.charCodeAt(0))
    
    // If divisor is greater than number 
    if (ans.length === 0) 
        return '0'; 
    
    return ans; 

}

function solution(A) {

    while (parseInt(A[A.length-1]) % 2 === 0) {
        if (A.length === 1 && parseInt(A[0]) === 2) {
            return 1
        }
        A = longDivision(A, 2);
        console.log(A)
    }

    return 0
}

console.log(solution('20'))