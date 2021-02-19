class Node:
    def __init__(self, idx):
        self.idx = idx
        self.children = []
        self.leaf = False
        
    def __repr__(self):
        # return 'idx -> {} || children -> {} || leaf - > {}'.format(self.idx, self.children, self.leaf)
        return '{} {} - {}'.format(id(self), self.idx, self.children)

class Solution:
    def dfs(self, s, wordDict, memo):
        if s in memo:
            return memo[s]
        
        res = []
        if len(s) == 0:
            res.append('')
            return res
        
        for word in wordDict:
            if s.startswith(word):
                idx = len(word)
                sub_list = self.dfs(s[idx:], wordDict, memo)
                
                for sub in sub_list:
                    val = ''
                    if sub == '':
                        val = word
                    else:
                        val = word + ' ' + sub
                    res.append(val)
                    
        memo[s] = res
        return res
        
    def wordBreak(self, s, wordDict):
        memo = {}
        return self.dfs(s, wordDict, memo)
    
    def wordBreak2(self, s, wordDict) :
        from collections import deque
        
        wordDict = set(wordDict)
        n = len(s)
        queue = deque([])
        head = Node(0)
        queue.append(head)
        visited = {}
        possible = False
        
        # generate execution plan
        while queue:
            start = queue.popleft()
            
            chd = []
            for end in range(start.idx + 1, n + 1):
                sub = s[start.idx:end]
                if sub in wordDict:
                    tmp = None
                    if end in visited:
                        tmp = visited.get(end)
                    else:
                        tmp = Node(end)
                        visited[end] = tmp
                        queue.append(tmp) # only add new nodes back to the queue
                    start.children.append(tmp)
                    if end == n:
                        possible = True
                        tmp.leaf = True
                             
        
        memo = {}
        
        final = []
        if not possible:
            return final
        # final all paths from source to target
        _, arr = self.helper(head, s, memo)
        
        for ans in arr:
            p = ' '.join(ans)
            final.append(p)
        
        return final
        
    def helper(self, head, s, memo):

        if head.idx in memo:
            return head.idx, memo[head.idx]

        res = []
        if head.leaf:
            res.append([])
    
        else:
            for node in head.children:
                end_idx, sub_paths = self.helper(node, s, memo)
                for p in sub_paths:
                    tmp = deque(p.copy())
                    v = s[head.idx: end_idx]
                    tmp.appendleft(v)
                    res.append(tmp)
        
        # print(head.idx, res)
        memo[head.idx] = res
        return head.idx, res

s = Solution()
print(s.wordBreak('catsanddog', ["cats", "dog", "sand", "and", "cat"]))