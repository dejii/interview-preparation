class Meeting:
    def __init__(self, start, end):
        self.start = start
        self.end = end

    def __lt__(self, other):
        return self.end < other.end

    def __repr__(self):
        return f"[start {self.start}, end {self.end}]"


class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:

        n = len(intervals)
        if n == 0:
            return 0

        intervals.sort(key=lambda x: x[0])

        q = []
        fs, fe = intervals[0]  # first start & end
        q.append(Meeting(fs, fe))

        for i in range(1, n):
            currentMeeting = heapq.heappop(q)
            nextMeetingStart, nextMeetingEnd = intervals[i]
            if currentMeeting.end <= nextMeetingStart:
                currentMeeting.end = nextMeetingEnd
            else:
                heapq.heappush(q, Meeting(nextMeetingStart, nextMeetingEnd))

            heapq.heappush(q, currentMeeting)

        return len(q)

