# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    
    def size(self, node):
        count = 0
        
        while node:
            count += 1
            node = node.next
            
        return count
    
    def helper(self, l1, l2, res):
        if l1 is None:
            print(res)
            return 0
        if l1.next is not None:
            res.next = ListNode(0)
        carry = self.helper(l1.next, l2.next, res.next)
        
        total = l1.val + l2.val + carry
        res.val = total % 10
        # print(res.val, l1.val, l2.val)
        
        return total // 10
            
        
    
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        m = self.size(l1)
        n = self.size(l2)
        
        if n < m:
            diff = m - n
            for i in range(diff):
                node = ListNode(0)
                node.next = l2
                l2 = node
        if m < n:
            diff = n - m
            for i in range(diff):
                node = ListNode(0)
                node.next = l1
                l1 = node
        
        
        # print(self.size(l2))
        head = ListNode(0)
        res = ListNode(0)
        head.next = res
        
        carry = self.helper(l1, l2, res)
        print(head.next)
        if carry > 0:
            head.val = carry
        else:
            head = head.next
        
        return head
        