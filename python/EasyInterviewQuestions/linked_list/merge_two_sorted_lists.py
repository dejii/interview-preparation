# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1, l2):
        if not l1:
            return l2
        if not l2:
            return l1
        if l1.val > l2.val:
            return self.mergeTwoLists(l2, l1)

        head = l1
        p = l1
        l1 = l1.next

        while l1 and l2:
            if l1.val <= l2.val:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next

            p = p.next

        if l1:
            p.next = l1

        if l2:
            p.next = l2

        return head

