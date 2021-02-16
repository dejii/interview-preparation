class Solution:
    
    def helper(self, s, wordDict, start, memo):
        if start == len(s):
            # reached the end
            return True
        
        if start in memo:
            return memo[start]
        
        for end in range(start + 1, len(s) + 1):
            sub = s[start: end]
            if sub in wordDict and self.helper(s, wordDict, end, memo):
                memo[start] = True
                return memo[start]
        memo[start] = False
        return memo[start]
    
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        wordDict = set(wordDict)
        dp = [False] * (n + 1)
        dp[0] = True
        
        for i in range(1, n + 1):
            for j in range(0, i):
                sub = s[j : i]
                if dp[j] is True and sub in wordDict:
                    dp[i] = True
                    break
        return dp[n]
    
    def wordBreak0(self, s: str, wordDict: List[str]) -> bool:
        wordDict = set(wordDict)
        memo = {}
        return self.helper(s, wordDict, 0, memo)
    
    
    
    def wordBreak1(self, s: str, wordDict: List[str]) -> bool:
        from collections import deque
        
        wordDict = set(wordDict)
        n = len(s)
        queue = deque([])
        queue.append(0)
        visited = {}
        
        while queue:
            
            start = queue.popleft()
            if start in visited:
                continue
            
            for end in range(start + 1, n + 1):
                sub = s[start:end]
                if sub in wordDict:
                    queue.append(end)
                    if end == n:
                        return True
                    
            visited[start] = True
            
        return False
                
            