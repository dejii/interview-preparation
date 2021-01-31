class UndergroundSystem:
    def __init__(self):
        self.checkInMap = {}
        self.checkOutMap = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.checkInMap[id] = (stationName, t)

    # on checkout, update our start->end map with the total and count
    def checkOut(self, id: int, stationName: str, t: int) -> None:
        checkInStation, checkInTime = self.checkInMap.get(id)
        route = checkInStation + "_" + stationName
        timeTaken = t - checkInTime
        if route in self.checkOutMap:
            checkOutPair = self.checkOutMap.get(route)
            checkOutPair[0] += timeTaken
            checkOutPair[1] += 1
        else:
            self.checkOutMap[route] = [timeTaken, 1]
        self.checkInMap.pop(id)
        # remove user from the check in map to save space, since we alrady have the avg information at this point

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        route = startStation + "_" + endStation
        checkOutPair = self.checkOutMap[route]
        return checkOutPair[0] / checkOutPair[1]


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)
