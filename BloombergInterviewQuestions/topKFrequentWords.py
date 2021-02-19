import heapq

class Word:
    def __init__(self, word, count):
        self.word = word
        self.count = count
        
    def __lt__(self, other):
        if self.count == other.count:
            return self.word > other.word
        return self.count < other.count

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        
        freq = {}
        
        for word in words:
            freq[word] = freq.get(word, 0) + 1
        
        q = []
        print(freq)
        heapq.heapify(q)
        for word, count in freq.items():
            heapq.heappush(q, Word(word, count))
            
            if len(q) > k:
                heapq.heappop(q)
                
        ans = []
        
        for i in range(k):
            ans.append(heapq.heappop(q).word)
            
        ans.reverse()
        return ans
            
        