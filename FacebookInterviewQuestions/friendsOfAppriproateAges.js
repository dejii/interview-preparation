/**
 * @param {number[]} ages
 * @return {number}
 */
var numFriendRequests = function(ages) {
  // max age number

  let requests = 0;
  for (let i = 0; i < ages.length; i++) {
    let a = ages[i];
    for (let j = 0; j < ages.length; j++) {
      let b = ages[j];
      if (b > a || b <= a * 0.5 + 7) continue;

      if (i !== j) {
        requests += 1;
      }
    }
  }
  return requests;

  //     let freq = new Array(121).fill(0);

  //     for (let age of ages) {
  //         freq[age]++;
  //     }

  //     let requests = 0;
  //     for (let a = 1; a <= 120; a++) {
  // 	  for (let b = 1; b <= 120; b++) {
  // 		if (b > a || b <= 0.5 * a + 7) {
  // 		  continue;
  // 		}

  // 		if (a == b) {
  // 		  requests += freq[a] * (freq[a] - 1);
  // 		} else {
  // 		  requests += freq[a] * freq[b];
  // 		}
  // 	  }
  // 	}

  // 	return requests;
};

/**
 * 
 public int numFriendRequests(int[] ages) {
  int[] freq = new int[121];
  // count frequency of ages
	for (int age : ages) {
	  freq[age]++;
	}

	int req = 0;

	for (int a = 1; a <= 120; a++) {
	  for (int b = 1; b <= 120; b++) {
		if (b > a || b <= 0.5 * a + 7) {
		  continue;
		}

		if (a == b) {
		  req += freq[a] * (freq[a] - 1);
		} else {
		  req += freq[a] * freq[b];
		}
	  }
	}

	return req;
  }
 */

/**
 * The NAIVE solution should be comparing each pair and has O(N^2) time complexity. However,
 *  after careful consideration, we can easily find that for every person, there's a range of ages 
 * that he will make request to. As a result, it is not hard to think of an O(NlgN) solution, where we 
 * sort the array first, and for each person, we calculate the expected range, and use binary search to 
 * find the number of elements in ages[] that sit in that range. Note that,
age[B] > 100 && age[A] < 100 is an useless condition which is fully convered by the second one.
 Here is the code:

    int numFriendRequests(vector<int>& ages) {
        sort(ages.begin(), ages.end());
        int res = 0;
        for (int i = 0; i < ages.size(); ++i) {
            int low_bound = ages[i]/2 + 8;
            auto low_it = lower_bound(ages.begin(), ages.end(), low_bound);
            auto high_it = upper_bound(ages.begin(), ages.end(), ages[i]);
            int request = distance(low_it, high_it) - 1;
            res += max(request, 0);
        }
        return res;
    }
low_bound is the inclusive left bound for the range. the "-1" in the cacluation of request
 is getting rid of making request to himself/herself . However, it is not necessary that his own 
 age is in the expected result (and also it is not necessary that low_it is before high_it), so in 
 the end, we make sure that for every person, the minimum request he/she will make is 0 (get rid of
     negative values).
After this, I was thinking if we can get faster? I observerd that low_it and hight_it is always
 proceeding, which makes sense as the age of the person cannot decrease (after sort), the left and right bound of his/her expected range should also not decrease. So, we don't need to apply the binary search for low_it and high_it in every step.
Here comes the code:

    int numFriendRequests(vector<int>& ages) {
        sort(ages.begin(), ages.end());
        auto low_it = lower_bound(ages.begin(), ages.end(), ages[0]/2 + 8);
        auto high_it = upper_bound(ages.begin(), ages.end(), ages[0]);
        int res = 0;
        for (int i = 0; i < ages.size(); ++i) {
            int low_bound = ages[i]/2 + 8;
            while (*low_it < low_bound) ++low_it;
            while (high_it != ages.end() && *high_it <= ages[i]) ++high_it;
            int request = distance(low_it, high_it) - 1;
            res += max(request, 0);
        }
        return res;
    }
We can find the expected range for the first element and then increase its boundaries when possible. In the for loop, low_it, high_it, and index i cannot decrease, so the time complexity for the for loop is only O(N). Someone may argue that, the sort takes O(NlgN) and that is right! However, please remember the range of of age : 1 <= ages[i] <= 120. We can definitely apply an O(N) bucket sort if we want.
The code is not optmized for the smallest xx ms on the test cases but should elaborate my idea for you!

Comments: 1

 */
var numFriendRequests = function(ages) {
  if (ages.length <= 1) return 0;
  var friendships = 0;
  var nums = {};
  ages.forEach(function(age) {
    if (age >= 15) nums[age] = age in nums ? nums[age] + 1 : 1;
  });
  var ages = Object.keys(nums).sort((a, b) => b - a);
  for (var i = 0; i < ages.length; i++) {
    for (var j = i + 1; j < ages.length; j++) {
      if (ages[j] > 0.5 * ages[i] + 7) {
        friendships += nums[ages[i]] * nums[ages[j]];
      }
    }
    friendships += (nums[ages[i]] - 1) * nums[ages[i]];
  }
  return friendships;
};
