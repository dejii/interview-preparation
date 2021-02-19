# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        n = mountain_arr.length()
        
        start = 0
        end = n - 1
        
        while start < end:
            mid = start + (end - start) // 2
            
            if mountain_arr.get(mid) < mountain_arr.get(mid + 1):
                start = mid + 1
            else:
                end = mid
                
        peak_idx = start
        
        start = 0
        end = peak_idx
        # search for target in left side
        
        while start <= end:
            mid = start + (end - start) // 2
            
            
            if mountain_arr.get(mid) == target:
                return mid
            
            if mountain_arr.get(mid) < target:
                start = mid + 1
            else:
                end = mid - 1
                
        # search on the right side
        start = peak_idx
        end = n - 1
        
        while start <= end:
            mid = start + (end - start) // 2
            
            if mountain_arr.get(mid) == target:
                return mid
            
            if mountain_arr.get(mid) > target:
                start = mid + 1
            else:
                end = mid - 1
                
        return -1
        
                
        