class Solution:
    def helper(self, i, path, ans, num_graph, end):
        # path.append(i)
        if i == end:
            ans.append(path.copy())
            return

        for k in num_graph[i]:
            path.append(k)
            self.helper(k, path, ans, num_graph, end)
            path.pop()

    def allPathsSourceTarget(self, graph):

        n = len(graph)
        end = n - 1
        path = []
        ans = []
        path.append(0)
        self.helper(0, path, ans, graph, end)
        return ans
