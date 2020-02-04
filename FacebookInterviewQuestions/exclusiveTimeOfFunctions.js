/**
 * 
 * public int[] exclusiveTime(int n, List<String> logs) {
    int[] res = new int[n];
    Stack<Integer> stack = new Stack<>();
    int prevTime = 0;
    for (String log : logs) {
        String[] parts = log.split(":");
        if (!stack.isEmpty()) res[stack.peek()] +=  Integer.parseInt(parts[2]) - prevTime; 
        prevTime = Integer.parseInt(parts[2]);
        if (parts[1].equals("start")) stack.push(Integer.parseInt(parts[0]));
        else {
            res[stack.pop()]++;
            prevTime++;
        }
    }
    return res;
}


Node* insert(Node* head, int insertVal) {
    if (!head) {
        head = new Node(insertVal, nullptr);
        head->next = head;
        return head;
    }

    Node* prev = head;
    Node* next = head->next;
    bool inserted = false;
    while (true) {
        // insert when:
        // 1. prev <= insertVal <= next
        // 2. insertVal < min (insert at the tail)
        // 3. insertVal > max (insert at the tail)
        if ((prev->val <= insertVal && insertVal <= next->val) ||
            (prev->val > next->val && insertVal < next->val) ||
            (prev->val > next->val && insertVal > prev->val)) {
            prev->next = new Node(insertVal, next);
            inserted = true;
            break;
        }

        prev = prev->next;
        next = next->next;
        if (prev == head) break;
    }
    
    if (!inserted) {
        // The only reason why `value` was not inserted is that
        // all values in the list are the same and are not equal to `value`.
        // So, we could insert `value` anywhere.
        prev->next = new Node(insertVal, next);
    }

    return head;
}

CAR POOLING

Sort the trips array by start location;
Use a PriorityQueue to store the trips, order by ending location.
Loop through the trips array, for each start location, keep polling out the arrays with correpoinding 
end location <= current start location, for each polled out array, add the corresponding passengers to 
capacity; deduct passengers at current start location from capacity, if capacity < 0, return false.
Repeat 3 till end, if never encounter false, return true.
    public boolean carPooling(int[][] trips, int capacity) {
        Arrays.sort(trips, Comparator.comparing(trip -> trip[1]));
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparing(trip -> trip[2]));
        for (int[] trip : trips) {
            while (!pq.isEmpty() && trip[1] >= pq.peek()[2]) // any passengers need to get off?
                capacity += pq.poll()[0]; // more capacity as passengers out.
            capacity -= trip[0]; // less capacity as passengers in.
            if (capacity < 0) return false; // not enough capacity.
            pq.offer(trip); // put into PriorityQueue the infomation at current location.
        }
        return true;
    }



    I think this quesiton has one of worst, if not the worst, test sets across leetcode.

The idea
The only things we care about are the depth/level of the current dir , and the length for 
current dir/file, we can store these information as an array
The depth can be calculated by counting \t in the currendir/file
/**
 * @param {string} input
 * @return {number}
var lengthLongestPath = function(input) {
    let dir = input.split('\n');
    let max = 0;
    let length = [];
    let depth= 0;
    for (let i=0;i<dir.length;i++) {
        depth = dir[i].lastIndexOf('\t')+1;
        if (dir[i].includes('.')) {
            let fileLength = dir[i].length-depth;
            max = Math.max((length[depth-1]+1||0) + fileLength , max);
        } else {
            length[depth] = dir[i].length - depth + (length[depth-1]+1||0);
        }
    }
    return max;
};



RANDOM PIC INDEX
class Solution {

    Random random;
    int[] wSums;
    
    public Solution(int[] w) {
        this.random = new Random();
        for(int i=1; i<w.length; ++i)
            w[i] += w[i-1];
        this.wSums = w;
    }
    
    public int pickIndex() {
        int len = wSums.length;
        int idx = random.nextInt(wSums[len-1]) + 1;
        int left = 0, right = len - 1;
        // search position 
        while(left < right){
            int mid = left + (right-left)/2;
            if(wSums[mid] == idx)
                return mid;
            else if(wSums[mid] < idx)
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}





LARGEST RECT

var largestRectangleArea = function(heights) {
  let max = 0;
  for (let i = 0; i< heights.length; i++) {
      const base = heights[i];
      const arr = [heights[i]];
      
      // go right
      for (let j = i + 1; j < heights.length; j++) {
          if (heights[j] < base) break;
          arr.push(heights[j])
      }
      // go left
      for (let j = i - 1; j >= 0; j--) {
          if (heights[j] < base) break;
          arr.push(heights[j])
      }
      
      // calc and compare
      const area = arr.length * base
      if (area > max) max = area;
  }
  
  return max;
};
Stack
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [{ left: 0, val: 0 }];

  const peek = () => stack[stack.length - 1] || null;

  for (let i = 0; i <= heights.length; i++) {
    const push = () => stack.push({ left: i + 1, val: heights[i] });
      
    if (heights[i] && heights[i] > peek().val) {
      push();
    } else {


      while (peek() && peek().val > (heights[i] || 0)) {
        const top = stack.pop();
        const left = peek() ? peek().left : 0;
        maxArea = Math.max(maxArea, (i - left) * top.val);
      }
      push();
    }
  }
  return maxArea;
 };


 class MedianFinder {
    priority_queue<int> lo;                              // max heap
    priority_queue<int, vector<int>, greater<int>> hi;   // min heap

public:
    // Adds a number into the data structure.
    void addNum(int num)
    {
        lo.push(num);                                    // Add to max heap

        hi.push(lo.top());                               // balancing step
        lo.pop();

        if (lo.size() < hi.size()) {                     // maintain size property
            lo.push(hi.top());
            hi.pop();
        }
    }

    // Returns the median of current data stream
    double findMedian()
    {
        return lo.size() > hi.size() ? (double) lo.top() : (lo.top() + hi.top()) * 0.5;
    }
};



LONGEST VALID PARENTHESIS
class Solution {
public:
    int longestValidParentheses(string s) {
        int n = s.length(), longest = 0;
        stack<int> st;
        for (int i = 0; i < n; i++) {
            if (s[i] == '(') st.push(i);
            else {
                if (!st.empty()) {
                    if (s[st.top()] == '(') st.pop();
                    else st.push(i);
                }
                else st.push(i);
            }
        }
        if (st.empty()) longest = n;
        else {
            int a = n, b = 0;
            while (!st.empty()) {
                b = st.top(); st.pop();
                longest = max(longest, a-b-1);
                a = b;
            }
            longest = max(longest, a);
        }
        return longest;
    }
};
The workflow of the solution is as below.

Scan the string from beginning to end.
If current character is '(',
push its index to the stack. If current character is ')' and the
character at the index of the top of stack is '(', we just find a
matching pair so pop from the stack. Otherwise, we push the index of
')' to the stack.
After the scan is done, the stack will only
contain the indices of characters which cannot be matched. Then
let's use the opposite side - substring between adjacent indices
should be valid parentheses.
If the stack is empty, the whole input
string is valid. Otherwise, we can scan the stack to get longest
valid substring as described in step 3.



MISSING ELEME

The idea is straight-forward.

We start with searching for target, which is "nums[0] + K", in the array. Then we will need to increase it by the number of elements, which have appeared in the array and are also smaller or equal to target, except for the first element.

e.g.
A = [1,2,4], K = 3

We start with trying to find "target = nums[0] + K = 4". And in the array , except for the first element, we have two elements, 2 and 4 in the array, are smaller or equal to target, so the final answer is 6.

With that idea in mind, we can quickly come up with a solution using binary search to find the index of the target in the array, or insertion place for the target, if the target is not in the element. Then we can simply return "target + index".

BUT, we will get WRONG answer in below case with that idea. We will still get answer as 6, while 6 is also in the array.
e.g.
A = [1, 2, 4, 6], K =3

At this point, we realized that we cannot finish this problem in one shot, and really hope if we can repeat this process, so we will find 6 in the array, and increate the result by 1 (since we find one more new element in the array we should skip). But it's also a bad idea to simply repeat that process, since extra binary searches would be expensive.

Let's take a look back to above exmaple and see how we did the search for target:
1st loop: left = 0, right = 3, mid = 1, nums[mid] = 2, target = 4,
2nd loop: left = 1 + 1, right = 3, mid = 2, nums[mid] = 4, target = 4,
stop.

We can see from above iterations that we should be there, if we can increase the target by the number of elements we have skipped in current itereation. And this should only happens when increasing the left boundary.

In order to achieve that, we use "prevMid" to keep track the mid from previous iteration, and use the difference between current mid and prev mid to increase the target. So it will become:

zero: left = 0, right =3, target = 4, prevMid = 0,
1st loop: left = 0, right = 3, mid =1, nums[mid] = 2, target += (mid - prevMid) = 5, prevMid = 1;
2nd loop: left = 2, right = 3, mid = 2, nums[mid] =4, target += (mid - prevMid) = 7, prevMid = 3;
3rd loop: left = 3, right = 3, mid = 3, nums[mid] = 6, target +=(mid - prevMid) = 7, prevMid = 3;
stop.

Below is the code.

class Solution {
     public int missingElement(int[] nums, int k) {
        int target = nums[0] + k;
        int l = 0, r = nums.length - 1, prevMid = 0;
        while(l <= r) {
            int mid = l + (r - l) / 2;
            if(nums[mid] == target) return target + mid - prevMid;
            else if (nums[mid] > target) {
                r = mid - 1;
            }
            else {
                target += (mid - prevMid);
                prevMid = mid;
                l = mid + 1;
            }
        }
        return target;
    }
}


WILDCARD

def isMatch(self, s, p):
	return self.helper(s, p, 0, 0)

def helper(self, s, p, start_s, start_p):
	if start_s==len(s) and start_p==len(p): # reached the end of both S and P
		return True
	if start_p==len(p): # there are still characters in S => there is no match
		return False
	if start_s==len(s): # Hopefully the remaining characters in P are all stars
		return p[start_p]=='*' and self.helper(s, p, start_s, start_p+1) 
	if p[start_p]=='*':
		# star either matches 0 or >=1 character
		return self.helper(s, p, start_s+1, start_p) or self.helper(s, p, start_s, start_p+1)
	elif p[start_p]=='?' or p[start_p]==s[start_s]:
		# move both pointers
		return  self.helper(s, p, start_s+1, start_p+1)
	else: # the current char from P is a lowercase char different from s[start_s]
        return False
        

TOP K FREQ ELEMENTSS
public List<Integer> topKFrequent(int[] nums, int k) {

	List<Integer>[] bucket = new List[nums.length + 1];
	Map<Integer, Integer> frequencyMap = new HashMap<Integer, Integer>();

	for (int n : nums) {
		frequencyMap.put(n, frequencyMap.getOrDefault(n, 0) + 1);
	}

	for (int key : frequencyMap.keySet()) {
		int frequency = frequencyMap.get(key);
		if (bucket[frequency] == null) {
			bucket[frequency] = new ArrayList<>();
		}
		bucket[frequency].add(key);
	}

	List<Integer> res = new ArrayList<>();

	for (int pos = bucket.length - 1; pos >= 0 && res.size() < k; pos--) {
		if (bucket[pos] != null) {
			res.addAll(bucket[pos]);
		}
	}
    return res;
    
    // use maxHeap. Put entry into maxHeap so we can always poll a number with largest frequency
public class Solution {
    public List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int n: nums){
            map.put(n, map.getOrDefault(n,0)+1);
        }
           
        PriorityQueue<Map.Entry<Integer, Integer>> maxHeap = 
                         new PriorityQueue<>((a,b)->(b.getValue()-a.getValue()));
        for(Map.Entry<Integer,Integer> entry: map.entrySet()){
            maxHeap.add(entry);
        }
        
        List<Integer> res = new ArrayList<>();
        while(res.size()<k){
            Map.Entry<Integer, Integer> entry = maxHeap.poll();
            res.add(entry.getKey());
        }
        return res;
    }
}

GROUP SHIFTED STRINGS
nitially I could not understand the solution, but got explanation from other solutions. Here's my solution and explanation for people who don't understand.

Basically we need to form some sort of key for each word to group them. (Remember the idea of group all anagrams?)

Consider acf and pru. Now notice the differnce between each characters.
acf = 0->2->3, and pru = 0->2->3. So these two form same group. So in this case, you can simply use integers ASCII difference to form key.

Now consider corner case, az and ba, where az = 0->25 and ba = 0->-1. When it goes negative, just make it positive(rotate or mod equivalent) by adding 26. So it becomes, ba = 0->25, which forms same group.

NOW, talking about "concise" code, here it is.

public List<List<String>> groupStrings(String[] strings) {
    Map<String, List<String>> map = new HashMap<>();

    for(String s : strings) {
        String key = getKey(s);
        List<String> list = map.getOrDefault(key, new ArrayList<>());
        list.add(s);
        map.put(key, list);
    }
    return new ArrayList<>(map.values());
}

private String getKey(String s) {
    char[] chars = s.toCharArray();
    String key = "";
    for(int i = 1; i < chars.length; i++) {
        int diff = chars[i] - chars[i-1];
        key += diff < 0 ? diff + 26 : diff;
        key += ",";
    }
    return key;
}



We start search the matrix from top right corner, initialize the current position to top right corner, 
if the target is greater than the value in current position, then the target can not be in entire row of 
current position because the row is sorted, if the target is less than the value in current position, then the target can not in the entire column because the column is sorted too. We can rule out one row or one column each time, so the time complexity is O(m+n).

public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if(matrix == null || matrix.length < 1 || matrix[0].length <1) {
            return false;
        }
        int col = matrix[0].length-1;
        int row = 0;
        while(col >= 0 && row <= matrix.length-1) {
            if(target == matrix[row][col]) {
                return true;
            } else if(target < matrix[row][col]) {
                col--;
            } else if(target > matrix[row][col]) {
                row++;
            }
        }
        return false;
    }
}


public int numDistinctIslands(int[][] grid) {
    Set<String> set = new HashSet<>();
    for(int i = 0; i < grid.length; i++) {
        for(int j = 0; j < grid[i].length; j++) {
            if(grid[i][j] != 0) {
                StringBuilder sb = new StringBuilder();
                dfs(grid, i, j, sb, "o"); // origin
                grid[i][j] = 0;
                set.add(sb.toString());
            }
        }
    }
    return set.size();
}
private void dfs(int[][] grid, int i, int j, StringBuilder sb, String dir) {
    if(i < 0 || i == grid.length || j < 0 || j == grid[i].length 
       || grid[i][j] == 0) return;
    sb.append(dir);
    grid[i][j] = 0;
    dfs(grid, i-1, j, sb, "u");
    dfs(grid, i+1, j, sb, "d");
    dfs(grid, i, j-1, sb, "l");
    dfs(grid, i, j+1, sb, "r");
    sb.append("b"); // back
}
 */
