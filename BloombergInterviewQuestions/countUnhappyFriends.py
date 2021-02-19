class Solution:
    def unhappyFriends(self, n: int, preferences: List[List[int]], pairs: List[List[int]]) -> int:
        
        friend_map = {}
        
        for x,y in pairs:
            friend_map[x] = preferences[x][:preferences[x].index(y)]
            friend_map[y] = preferences[y][:preferences[y].index(x)]
        
        # print(friend_map)
        ans = 0
            
        for x in friend_map:
            for y in friend_map[x]:
                if x in friend_map[y]:
                    ans += 1
                    break
        
        return ans
                   