class BrowserHistory:
    def __init__(self, homepage: str):
        self.backwards = [homepage]
        self.forwards = []

    def visit(self, url: str) -> None:
        self.backwards.append(url)
        self.forwards = []

    def back(self, steps: int) -> str:
        while len(self.backwards) > 1 and steps > 0:
            current = self.backwards.pop()
            self.forwards.append(current)
            steps -= 1
        return self.backwards[-1]

    def forward(self, steps: int) -> str:
        while len(self.forwards) > 0 and steps > 0:
            current = self.forwards.pop()
            self.backwards.append(current)
            steps -= 1
        return self.backwards[-1]


# Your BrowserHistory object will be instantiated and called as such:
# obj = BrowserHistory(homepage)
# obj.visit(url)
# param_2 = obj.back(steps)
# param_3 = obj.forward(steps)
