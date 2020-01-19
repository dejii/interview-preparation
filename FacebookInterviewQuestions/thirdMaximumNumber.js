/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = null;
  let max2 = null;
  let max3 = null;

  for (let n of nums) {
    if (n === max1 || n === max2 || n === max3) continue;

    if (max1 === null || n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (max2 === null || n > max2) {
      max3 = max2;
      max2 = n;
    } else if (max3 === null || n > max3) {
      max3 = n;
    }
  }
  return max3 === null ? max1 : max3;
};

/**
 * public static int secondLargest(int arr[]) { 

  int firstLargest = Integer.MIN_VALUE;
  int secondLargest = Integer.MIN_VALUE; 

  if (arr.length < 2) { 
    throw new NoSecondLargestException("Array too small to have 2nd largest item");
  } 

  /*
    We will check every element and compete it for a position amongst
    firstLargest and secondLargest
  
  for (int i = 0; i < arr.length; i++) { 
      
    /*
      If this item beats the largest seen so far, make the
      firstLargest the new secondLargest.
      arr[i] the becomes the new firstLargest.
    
    if (arr[i] > firstLargest) { 
      secondLargest = firstLargest; 
      firstLargest = arr[i]; 
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {

      /*
        This element becomes the secondLargest if it does not beat
        the firstLargest BUT it beats the secondLargest AND is NOT
        the same as the firstLargest item (so we don't unnecessarily
        eject the secondLargest value if this item IS the same as the
        firstLargest value)
      
      secondLargest = arr[i]; 
    }
} 

if (secondLargest == Integer.MIN_VALUE) {
  throw new NoSecondLargestException("There is no second largest item");
} else {
  return secondLargest;
}

}
 */
