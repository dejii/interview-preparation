var dfs = function(nestedList, depth) {
  var sum = 0;
  var n = nestedList.length;
  for (var i = 0; i < n; i++) {
    if (nestedList[i].isInteger()) {
      sum += nestedList[i].getInteger() * depth;
    } else {
      sum += dfs(nestedList[i].getList(), depth + 1);
    }
  }
  return sum;
};
var depthSum = function(nestedList) {
  return dfs(nestedList, 1);
};

//O(n)

/**
 * var depthSum = function(nestedList) {
    
    let level = 1;
    let queue = new NestedInteger();
    let result = 0;
    queue.add(nestedList);
    while (queue.getList().length > 0) {
        let n = queue.getList().length;
        for (let i = 0; i < n; i++) {
            let current = queue.getList().shift();
            console.log(current)
            if (current.isInteger()) {
                result += current.getInteger() * level;
            } else {
                queue.add(current.getList())
            }
        }
        level++;
    }
    return result;
    
    
};


 */

/**
  * 
  * II
  * 
  * public int depthSumInverse(List<NestedInteger> nestedList) {
        if (nestedList == null) return 0;
        Queue<NestedInteger> queue = new LinkedList<NestedInteger>();
        int prev = 0;
        int total = 0;
        for (NestedInteger next: nestedList) {
            queue.offer(next);
        }
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            int levelSum = 0;
            for (int i = 0; i < size; i++) {
                NestedInteger current = queue.poll();
                if (current.isInteger()) levelSum += current.getInteger();
                List<NestedInteger> nextList = current.getList();
                if (nextList != null) {
                    for (NestedInteger next: nextList) {
                        queue.offer(next);
                    }
                }
            }
            prev += levelSum;
            total += prev;
        }
        return total;
    }
  */
