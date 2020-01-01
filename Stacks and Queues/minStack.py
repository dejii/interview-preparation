class MinStack:
    def __init__(self):
        self.stack = list()
        self.min = list()

    # @param x, an integer
    # @return an integer
    def push(self, x):
        top = self.top()
        m = min(self.getMin(), x) if top != -1 else x
        self.stack.append(x)
        self.min.append(m)

    # @return nothing
    def pop(self):
        if self.top() != -1:
            self.min.pop()
            return self.stack.pop()
        return None

    # @return an integer
    def top(self):
        return self.stack[-1] if self.stack else -1

    # @return an integer
    def getMin(self):
        top = self.top()
        if top == -1:
            return -1
        return self.min[-1]
