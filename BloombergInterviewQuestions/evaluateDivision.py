from collections import defaultdict, deque

class Solution:
    def buildGraph(self, equations, values):
        graph = defaultdict(dict)
        n = len(equations)
        for i in range(n):
            a, b = equations[i]
            graph[a][b] = values[i]
            graph[b][a] = 1 / values[i]
            
        return graph
    
    def findPath(self, start, end, graph):
        if start not in graph or end not in graph:
            return -1
        queue = deque([])
        queue.append((start, 1))
        
        visited = set() # so we don't visit a node that's been previously visited
        while queue:
            node, current = queue.popleft()
            
            if node == end:
                return current
            
            for child, value in graph[node].items():
                if child not in visited:
                    queue.append((child, value * current))
                    visited.add(child)
                    
        return -1.0
        
            
        
        
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        
        graph = self.buildGraph(equations, values)
        
        return [self.findPath(s, e, graph) for s, e in queries]
        