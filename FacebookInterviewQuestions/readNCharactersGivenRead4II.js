/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */

var solution = function(read4) {
  let tempBuffer = [];
  let tempBufferIndex = 0;
  let charsToRead = 0;
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
    let index = 0;
    while (index < n) {
      if (tempBufferIndex == charsToRead) {
        tempBufferIndex = 0;
        charsToRead = read4(tempBuffer);
        if (charsToRead == 0) {
          break;
        }
      }

      buf[index++] = tempBuffer[tempBufferIndex++];
    }

    return index;
  };
};
