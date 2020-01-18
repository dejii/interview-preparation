/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
  let map = new Map();
  for (let n of arr1) {
    if (!map.has(n)) {
      map.set(n, 0);
    }
    map.set(n, map.get(n) + 1);
  }
  for (let n of arr2) {
    if (!map.has(n)) {
      map.set(n, 0);
    }
    map.set(n, map.get(n) + 1);
  }
  for (let n of arr3) {
    if (!map.has(n)) {
      map.set(n, 0);
    }
    map.set(n, map.get(n) + 1);
  }

  let result = [];
  for (let [num, count] of map) {
    if (count === 3) {
      result.push(num);
    }
  }

  return result.sort((a, b) => a - b);
};

/**
 * class Solution {
    public List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {
        List<Integer> list = new ArrayList();
        int p1 = 0, p2 = 0, p3 = 0;
        while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
            int min = Math.min(arr1[p1], Math.min(arr2[p2], arr3[p3]));
            if (arr1[p1] == arr2[p2] && arr1[p1] == arr3[p3]) list.add(arr1[p1]);
            if (arr1[p1] == min) p1++;
            if (arr2[p2] == min) p2++;
            if (arr3[p3] == min) p3++;
        }
        return list;
    }
}

   public List<Integer> arraysIntersection(int[] arr1, int[] arr2, int[] arr3) {

        List<Integer> result = new ArrayList<>();

        int i = 0;
        int j = 0;
        int k = 0;
		
        while (i < arr1.length && j < arr2.length && k < arr3.length) {
            if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
                result.add(arr1[i]);
                i++;
                j++;
                k++;
            } else if (arr1[i] < arr2[j]) {
                i++;
            } else if (arr2[j] < arr3[k]) {
                j++;
            } else k++;
        }

        return result;

    }

 */
