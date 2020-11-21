class Node:
    def __init__(self, x, minn, next):
        self.x = x
        self.minn = minn
        self.next = next


class MinStack:
    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.head = None

    def push(self, x):
        self.head = (
            Node(x, min(self.head.minn, x), self.head)
            if self.head
            else Node(x, x, self.head)
        )

    def pop(self):
        self.head = self.head.next

    def top(self):
        return self.head.x

    def getMin(self):
        return self.head.minn


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
