/**
 * private int getPeakOrVally(final int[] arr) {
    if (arr.length < 3) return -1;

    boolean peak = false, valley = false;
    int index = -1;
    for (int i = 1; i < arr.length - 1; i++) {
      if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
        if (valley || peak) 
          return -1;
        valley = true;
        index = i;
      } else if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
        if (valley || peak)
          return -1;
        peak = true;
        index = i;
      }
    }
    return index;
  }
 */
