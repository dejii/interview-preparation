class Solution:
    
    def helper(self, board, i, j, n, m, idx, word):
        if idx == len(word):
            return True
        
        if i < 0 or i >= n or j < 0 or j >= m or idx >= len(word) or word[idx] != board[i][j]:
            return False
         
        # mark as seen so we don't go back in cycles
        val = board[i][j]
        board[i][j] = '#'
        
        found = self.helper(board, i + 1, j, n, m, idx + 1, word) or \
        self.helper(board, i - 1, j, n, m, idx + 1, word) or \
        self.helper(board, i, j + 1, n, m, idx + 1, word) or \
        self.helper(board, i, j - 1, n, m, idx + 1, word)
        
        board[i][j] = val
        
        return found
    
    
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        n = len(board)
        m = len(board[0])
        
        for i in range(n):
            for j in range(m):
                val = board[i][j]
                
                if val == word[0] and self.helper(board, i, j, n, m, 0, word):
                    return True
                
        return False
        