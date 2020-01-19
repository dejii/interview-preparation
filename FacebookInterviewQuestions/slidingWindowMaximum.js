/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return [];
  let result = new Array(nums.length - k + 1).fill(0);
  for (let i = 0; i < nums.length - k + 1; i++) {
    let max = -Infinity;
    for (let j = i; j < i + k; j++) {
      max = Math.max(max, nums[j]);
    }
    result[i] = max;
  }
  return result;
};

/**
 * We scan the array from 0 to n-1, keep "promising" elements in the deque. 
 * The algorithm is amortized O(n) as each element is put and polled once.

At each i, we keep "promising" elements, which are potentially max number in window 
[i-(k-1),i] or any subsequent window. This means

If an element in the deque and it is out of i-(k-1), we discard them. We just need to poll
 from the head, as we are using a deque and elements are ordered as the sequence in the array

Now only those elements within [i-(k-1),i] are in the deque. We then discard elements smaller
 than a[i] from the tail. This is because if a[x] <a[i] and x<i, then a[x] has no chance
  to be the "max" in [i-(k-1),i], or any other subsequent window: a[i] would always be a better candidate.

As a result elements in the deque are ordered in both sequence in array and their value.
 At each step the head of the deque is the max element in [i-(k-1),i]

public int[] maxSlidingWindow(int[] a, int k) {		
		if (a == null || k <= 0) {
			return new int[0];
		}
		int n = a.length;
		int[] r = new int[n-k+1];
		int ri = 0;
		// store index
		Deque<Integer> q = new ArrayDeque<>();
		for (int i = 0; i < a.length; i++) {
			// remove numbers out of range k
			while (!q.isEmpty() && q.peek() < i - k + 1) {
				q.poll();
			}
			// remove smaller numbers in k range as they are useless
			while (!q.isEmpty() && a[q.peekLast()] < a[i]) {
				q.pollLast();
			}
			// q contains index... r contains content
			q.offer(i);
			if (i >= k - 1) {
				r[ri++] = a[q.peek()];
			}
		}
		return r;
	}

 */
var maxSlidingWindow = function(nums, k) {
  if (nums === null || k <= 0) {
    return [];
  }
  let n = nums.length;
  let result = new Array(n - k + 1).fill(0);
  let idx = 0;
  let queue = [];
  for (let i = 0; i < n; i++) {
    // remove numbers outside window
    while (queue.length > 0 && queue[0] < i - k + 1) {
      queue.shift();
    }

    // remove smaller elements from end of queue
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop();
    }
    queue.push(i);

    // if we can start fillin the window
    if (i >= k - 1) {
      result[idx] = nums[queue[0]];
      idx++;
    }
  }
  return result;
};
