class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        n = len(intervals)
        i = 1
        intervals.sort(key=lambda x: x[0])
        # p
        curr = intervals[0]
        
        ans = [intervals[0]]
        while i < n:
            curr = ans[-1]
            interval = intervals[i]
            
            if interval[0] <= curr[1]:
                curr[1] = max(interval[1], curr[1])
            else:
                ans.append(interval)
                
            i += 1
                
        return ans