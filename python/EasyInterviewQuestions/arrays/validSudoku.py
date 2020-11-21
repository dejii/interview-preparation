class Solution:
    def isValidSudoku(self, board):

        seen = set()

        n = len(board)

        for i in range(n):
            for j in range(n):
                val = board[i][j]
                if val != ".":
                    block = (i // 3 * 3) + (j // 3)
                    r = "r" + val + str(i)
                    c = "c" + val + str(j)
                    b = "b" + val + str(block)

                    if r in seen or c in seen or b in seen:
                        return False
                    else:
                        seen.add(r)
                        seen.add(c)
                        seen.add(b)

        return True

