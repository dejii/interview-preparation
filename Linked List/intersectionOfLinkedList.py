class Solution:
    # @param A : head node of linked list
    # @param B : head node of linked list
    # @return the head node in the linked list
    def length(self, A):
        n = 0
        while (A):
            n += 1
            A = A.next
        return n
    def getIntersectionNode(self, A, B):
        m = self.length(A)
        n = self.length(B)
        if (n > m):
            return self.getIntersectionNode(B,A)
        diff = abs(m - n)
        for _ in range(diff):
            A = A.next
        while (A and B):
            if (A is B):
                return A
            A = A.next
            B = B.next
        return None