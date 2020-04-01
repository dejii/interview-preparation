"""
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
 """


def secondLargest(nums):
    max1 = float("-inf")
    max2 = float("-inf")

    if len(nums) < 2:
        # edge case
        pass
    for i in range(len(nums)):
        if nums[i] > max1:
            max2 = max1
            max1 = nums[i]
        elif nums[i] > max2 and nums[i] != max1:
            max2 = nums[i]

    if max2 == float("-inf"):
        # no send largest
        pass
    else:
        return max2


print(secondLargest([1, 2, 4, 6, 5, 10, 10]))


"""
if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    nums = list(arr)
    max1 = float("-inf")
    max2 = float("-inf")

    for i in range(len(nums)):
        if nums[i] > max1:
            max2 = max1
            max1 = nums[i]
        elif nums[i] > max2 and nums[i] != max1:
            max2 = nums[i]

    if max2 == float("-inf"):
        # no send largest
        pass
    else:
        print(max2)
"""
