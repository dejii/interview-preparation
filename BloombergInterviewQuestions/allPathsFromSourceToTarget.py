from collections import deque
class Solution:
    
    def helper(self, i, memo, graph, end):
        if i in memo:
            return memo[i]
        res = []
        if i == end:
            t = []
            t.append(i)
            res.append(t)
        else:
            for node in graph[i]:
                sub_list = self.helper(node, memo, graph, end)
                for sub in sub_list:
                    tmp = deque(sub)
                    tmp.appendleft(i)
                    res.append(tmp)

        
        memo[i] = res
        return res
    
    def allPathsSourceTarget1(self, graph: List[List[int]]) -> List[List[int]]:
        n = len(graph)
        end = n - 1
        memo = {}
        ans = self.helper(0, memo, graph, end)
        return ans
        
    def helper2(self, i, path, ans, num_graph, end):
        # path.append(i)
        if i == end:
            ans.append(path.copy())
            return
        
        for k in num_graph[i]:
            path.append(k)
            self.helper2(k, path, ans, num_graph, end)
            path.pop()
    
    
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:
        
        n = len(graph)
        end = n - 1
        path = []
        ans = []
        path.append(0)
        self.helper2(0, path, ans, graph, end)
        return ans