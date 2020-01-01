function isPalindrome (A) {
    for (var i = 0; i < Math.floor(A.length / 2); i++) {
        if (A[i] !== A[A.length - i - 1]) {
            return false
        }
    }  
    return true;
}

function longestPalindromeExpandingFromCentre(s, c1, c2) {
    var l = c1
    var r = c2;
    var n = s.length;
    while ((l >= 0) && (r <= (n - 1)) && (s[l] === s[r])) {
        // console.log('fs')
        l--;
        r++;
    }
    console.log(l+1,r-l-1)
    
    return s.slice(l+1, r)
}
function longestPalindromicSubstring(A) {
    var ans = '';
	    
    for (var i = 0; i < A.length; i++) {
        for(var j = i + 1; j < A.length + 1; j++) {
            var sub = A.slice(i, j)
            if (ans === '' && sub.length === 1) {
                ans = sub;
            } else {
                if (ans.length < sub.length) {
                    if (isPalindrome(sub)) {
                        ans = sub
                    }
                }
            }
        }
    }
    
    return ans

}

function longestPalindromicSubstring2 (A) {
    var longest = A.substring(0, 1);
    var n = A.length;
    for (var i = 0; i < (n - 1); i++) {
        var p1 = longestPalindromeExpandingFromCentre(A, i, i);
        console.log(i,i)
        if (p1.length > longest.length) {
            longest = p1
        }
        
        var p2 = longestPalindromeExpandingFromCentre(A, i, i+1);
        console.log(i,i+1)
        
        if (p2.length > longest.length) {
            longest = p2
        }
        
    }
    
    // return ans
    return longest;
}

var a = 'abb'
// console.log(longestPalindromicSubstring2(a))
console.log(longestPalindromeExpandingFromCentre(a, 1, 2))