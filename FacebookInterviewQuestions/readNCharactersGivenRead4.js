/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let temp = [];
    let total = 0;

    while (total < n) {
      let count = read4(temp);
      /*Even if we read 4 chars from Read4, 
            we don't want to exceed N and only want to read chars till N.*/
      count = Math.min(count, n - total);
      //Transfer all the characters read from Read4 to our buffer
      for (let i = 0; i < count; i++) {
        buf[total] = temp[i];
        total++;
      }

      //done. We can't read more characters.
      if (count < 4) break;
    }
    return total;
  };
};
/**
 * 
 * public int read(char[] buf, int n) {
  boolean eof = false;      // end of file flag
  int total = 0;            // total bytes have read
  char[] tmp = new char[4]; // temp buffer
  
  while (!eof && total < n) {
    int count = read4(tmp);
    
    // check if it's the end of the file
    eof = count < 4;
    
    // get the actual count
    count = Math.min(count, n - total);
    
    // copy from temp buffer to buf
    for (int i = 0; i < count; i++) 
      buf[total++] = tmp[i];
  }
  
  return total;
}

Neat solution! Just wanted to share a more commented version of your solution.

Also, the reason we need Math.min(count, n-total) is because we only want to read N
 characters even if we have all 4 characters returned from Read4.
Say, N = 18 and we're implentening Read18, then Read4 will takes us to 4*4 = 16 
chars. After that, we only want to read 2 more chars (even if the next Read4 returns 3 or 4 characters).

public int read(char[] buf, int n) {

        char[] temp = new char[4];  //Store our read chars from Read4
        int total = 0;
        
        while(total < n){
            /*Read and store characters in Temp. Count will store total chars read from Read4
            int count = read4(temp);
        
            /*Even if we read 4 chars from Read4, 
            we don't want to exceed N and only want to read chars till N.
            count = Math.min(count, n-total);
            
            //Transfer all the characters read from Read4 to our buffer
            for(int i = 0;  i < count; i++){
                buf[total] = temp[i];
                total++;
            }
            
            //done. We can't read more characters.
            if(count < 4) break;
        }
        
        return total;
    }
 */
