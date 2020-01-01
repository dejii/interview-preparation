
  
  
// function to reverse  
// bits of a number 
function reverseBits(A) { 
      
    var rev = 0
      
    // traversing bits of 'n' from the right 
    // while (n > 0) { 
          
        // bitwise left shift 'rev' by 1 
        // rev = rev << 1
          
        // // if current bit is '1' 
        // if ((n & 1) == 1) {
        //     rev = rev ^ 1
        // }
          
        // // bitwise right shift 'n' by 1 
        // n = n >>> 1

    // }

    var rev = 0;
	    
    for (var i = 0; i < 32; i++) {
        rev <<= 1;
        if ((A & (1 << i)) != 0)
            rev |= 1;
    }
    
    return rev;
          
      
    // required number 
    return rev 
}
console.log(reverseBits(3))