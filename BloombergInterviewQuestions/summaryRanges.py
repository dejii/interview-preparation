class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        
        
        n = len(nums)
        ans = []
        i = 0
        
        while i < n:
            tmp = nums[i]
            while i < n - 1 and nums[i + 1] - nums[i] == 1:
                i += 1
                
            if tmp != nums[i]:
                ans.append(f'{tmp}->{nums[i]}')
            else:
                ans.append(f'{tmp}')
                
            i += 1
            
        return ans
#         nums_set = set(nums)
#         ans = []
        
#         for num in nums:
#             if num not in nums_set:
#                 continue
#             start = num
            
#             while num in nums_set:
#                 nums_set.remove(num)
#                 num += 1
                
#             end = num
#             if end - start > 1:
#                 ans.append(f'{start}->{end - 1}')
#             else:
#                 ans.append(f'{start}')
                
#         return ans
                