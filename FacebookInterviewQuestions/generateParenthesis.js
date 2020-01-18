/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * @param {number} n
 * @return {string[]}
 */
function dfs(left, right, progress, result) {
  if (left === 0 && right === 0) {
    result.push(progress.join(""));
    return;
  }

  if (left > 0) {
    progress.push("(");
    dfs(left - 1, right, progress, result);
    progress.pop();
  }

  if (left < right) {
    progress.push(")");
    dfs(left, right - 1, progress, result);
    progress.pop();
  }
}
var generateParenthesis = function(n) {
  let result = [];
  dfs(n, n, [], result);
  return result;
};
function dfs(left, right, progress, result) {
  if (left === 0 && right === 0) {
    result.push(progress);
    return;
  }

  if (left > 0) {
    dfs(left - 1, right, progress + "(", result);
  }

  if (left < right) {
    dfs(left, right - 1, progress + ")", result);
  }
}
var generateParenthesis = function(n) {
  let result = [];
  dfs(n, n, "", result);
  return result;
};

/**
 *  public List<String> generateParenthesis(int n) {
        List<String> list = new ArrayList<String>();
        backtrack(list, "", 0, 0, n);
        return list;
    }
    
    public void backtrack(List<String> list, String str, int open, int close, int max){
        
        if(str.length() == max*2){
            list.add(str);
            return;
        }
        
        if(open < max)
            backtrack(list, str+"(", open+1, close, max);
        if(close < open)
            backtrack(list, str+")", open, close+1, max);
    }
    the idea here is to only add '(' and ')' that we know will guarantee us a solution (instead of adding 1 too many close). Once we add a '(' we will then discard it and try a ')' which can only close a valid '('. Each of these steps are recursively called.
 */
