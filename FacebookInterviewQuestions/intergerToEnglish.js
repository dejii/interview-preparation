/**
 * @param {number} num
 * @return {string}
 */
let LESS_THAN_10 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine"
];
let LESS_THAN_20 = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];
let LESS_THAN_100 = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];

function helper(num) {
  let result = "";

  if (num < 10) {
    result = LESS_THAN_10[num];
  } else if (num < 20) {
    result = LESS_THAN_20[num - 10];
  } else if (num < 100) {
    result = LESS_THAN_100[Math.floor(num / 10)] + " " + helper(num % 10);
  } else if (num < 1000) {
    result = helper(Math.floor(num / 100)) + " Hundred " + helper(num % 100);
  } else if (num < 1000000) {
    result = helper(Math.floor(num / 1000)) + " Thousand " + helper(num % 1000);
  } else if (num < 1000000000) {
    result =
      helper(Math.floor(num / 1000000)) + " Million " + helper(num % 1000000);
  } else {
    result =
      helper(Math.floor(num / 1000000000)) +
      " Billion " +
      helper(num % 1000000000);
  }
  return result.trim();
}
var numberToWords = function(num) {
  if (num === 0) {
    return "Zero";
  }

  return helper(num);
};

/**
 * 
 * Technically the time complexity the above solution is O(1),
 *  since it has a constant upper bound (a number can only be so long), but if we want
 *  to get an even tighter bound, then we can define n to be the number of non-zero digits, 
 * in which the time complexity is O(n^2) where n is the number of non-zero digits. 
 * This is because this solution doesn't use a StringBuilder, so each concat operation needs
 *  to re-traverse every character of the previously concatenated strings, and the number of
 *  characters is a function of the number of non-zero digits.
 * 
 * FOLLOW UP
 * 
 * Here is how I to solved it. If you guys were able to solve it with less lines of code. Please share your solution. Thanks!

class Solution {
     
    private final String[] belowTen = new String[] {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"};
    private final String[] belowTwenty = new String[] {"Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
    private final String[] belowHundred = new String[] {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
    
    public String numberToWords(int num) {
        if(num == 0) {
            return "Zero";
        }
        return helper(num);
    }
    public String helper(int num) {
        String result = "";
        int length = (num+"").length();
        if(num < 10) {
            return belowTen[num];
        }
        else if(length < 3) {
            int d1 = num/10 , d2 = num%10;
            if(d2 == 1) {
            	return belowTwenty[d2];
            }
            else {
                result = belowHundred[d2] + " " + belowTen[d1];
            }
        }
        else if(length == 3) {
        		result = helper(num%10) + " Hundred " + helper(num/10);
        }
        else if(length == 4) {
        		result = belowTen[num%10] + " Thousand " + helper(num/10);
        }
        else if(length == 5) {
        		result = helper(num%100) + " Thousand " + helper(num/100); 
        }
        else if(length == 6) {
        		result = helper(num%1000) + " Thousand " + helper(num/1000); 
        }
        else if(length == 7) {
        		result = belowTen[num%10] + " Million " + helper(num/10);
        }
        else if(length == 8) {
        		result = helper(num%100) + " Million " + helper(num/100); 
        }
        else if(length == 9) {
    			result = helper(num%1000) + " Million " + helper(num/1000); 
        }
        else if(length == 10) {
    			result = belowTen[num%10] + " Billion " + helper(num/10);
        }
        else if(length == 11) {
    			result = helper(num%100) + " Billion " + helper(num/100); 
        }
        else if(length == 12) {
			    result = helper(num%1000) + " Billion " + helper(num/1000); 
        }
        return result.trim();
    }
}


There is a good O(n) solution below by @airjordan919 where he uses a single string builder to generate the solution.
 * 
 * 
 * private final String[] LESS_THAN_20 = {"", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"};
private final String[] TENS = {"", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"};
private final String[] THOUSANDS = {"", "Thousand", "Million", "Billion"};

public String numberToWords(int num) {
    if (num == 0) return "Zero";

    int i = 0;
    String words = "";
    
    while (num > 0) {
        if (num % 1000 != 0)
    	    words = helper(num % 1000) +THOUSANDS[i] + " " + words;
    	num /= 1000;
    	i++;
    }
    
    return words.trim();
}

private String helper(int num) {
    if (num == 0)
        return "";
    else if (num < 20)
        return LESS_THAN_20[num] + " ";
    else if (num < 100)
        return TENS[num / 10] + " " + helper(num % 10);
    else
        return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);
}
 */
