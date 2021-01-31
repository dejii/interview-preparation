class Transaction:
    def __init__(self, s):
        name, time, amount, city = s.split(",")
        self.name = name
        self.time = int(time)
        self.city = city
        self.amount = int(amount)

    def invalidAmount(self):
        return self.amount > 1000

    def toString(self):
        return "{},{},{},{}".format(self.name, self.time, self.amount, self.city)

    def differentCity(self, city, time):
        return self.city != city and abs(self.time - time) <= 60

    def invalidTransaction(self, city, time):
        return self.invalidAmount() or self.differentCity(city, time)


class Solution:
    def isValid(self, transactions, transaction):
        if len(transactions) == 1 and not transaction.invalidAmount():
            return True

        for t in transactions:
            print(t.city, t.time, transaction.invalidTransaction(t.city, t.time))
            if transaction.invalidTransaction(t.city, t.time):
                return False
        return True

    def invalidTransactions(self, transactions: List[str]) -> List[str]:
        transaction_map = {}
        ans = []
        t = []
        for txn in transactions:
            transaction = Transaction(txn)
            t.append(transaction)
            if transaction.name in transaction_map:
                transaction_map[transaction.name].append(transaction)
            else:
                transaction_map[transaction.name] = [transaction]

        # print(transaction_map)
        # print(t)

        for transaction in t:
            # print(transaction_map[transaction.name])
            if not self.isValid(transaction_map[transaction.name], transaction):
                ans.append(transaction.toString())

        return ans

