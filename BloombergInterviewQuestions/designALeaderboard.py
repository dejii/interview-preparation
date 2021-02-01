import heapq
class Leaderboard: 

    def __init__(self):
        self.store = {}
        

    def addScore(self, playerId: int, score: int) -> None:
        if playerId in self.store:
            self.store[playerId] = self.store.get(playerId) + score
        else:
            self.store[playerId] = score
        

    def top(self, K: int) -> int:
        q = []
        for val in self.store.values():
            heapq.heappush(q, -val)
            
        res = 0
        for i in range(K):
            res += -1 * heapq.heappop(q)
        return res

    def reset(self, playerId: int) -> None:
        del self.store[playerId]
        


# Your Leaderboard object will be instantiated and called as such:
# obj = Leaderboard()
# obj.addScore(playerId,score)
# param_2 = obj.top(K)
# obj.reset(playerId)

"""
class Leaderboard {
    Map<Integer, Integer> map;
    TreeMap<Integer, Integer> sorted;
    public Leaderboard() {
        map = new HashMap<>();
        sorted = new TreeMap<>(Collections.reverseOrder());
    }
    
    public void addScore(int playerId, int score) {
        if (!map.containsKey(playerId)) {
            map.put(playerId, score);
            sorted.put(score, sorted.getOrDefault(score, 0) + 1);
        } else {
            int preScore = map.get(playerId);
            sorted.put(preScore, sorted.get(preScore) - 1);
            if (sorted.get(preScore) == 0) {
                sorted.remove(preScore);
            }
            int newScore = preScore + score;
            map.put(playerId, newScore);
            sorted.put(newScore, sorted.getOrDefault(newScore, 0) + 1);
        }
    }
    
    public int top(int K) {
        int count = 0;
        int sum = 0;
        for (int key : sorted.keySet()) {
            int times = sorted.get(key);
            for (int i = 0; i < times; i++) {
                sum += key;
                count++;
                if (count == K) {
                    break;
                }
            }
            if (count == K) {
                break;
            }
        }
        return sum;
    }
    
    public void reset(int playerId) {
        int preScore = map.get(playerId);
        sorted.put(preScore, sorted.get(preScore) - 1);
        if (sorted.get(preScore) == 0) {
            sorted.remove(preScore);
        }
        map.remove(playerId);
    }
}

"""