/*
Given an array of meeting time intervals consisting of start and end times
 [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

For example,

Given [[0, 30],[5, 10],[15, 20]],
return false.

Solution

The idea is pretty simple: first we sort the intervals in the ascending order of start; then we check for the overlapping of each pair of neighboring intervals. If they do, then return false; after we finish all the checks and have not returned false, just return true.

Sorting takes O(nlogn) time and the overlapping checks take O(n) time, so this idea is O(nlogn) time in total.

The code 
*/

function overlap(meeting1, meeting2) {
  const [meeting1Start, meeting1End] = meeting1;
  const [meeting2Start, meeting2End] = meeting2;

  if (meeting1End > meeting2Start) {
    return true;
  } else {
    return false;
  }
}

function canAttendMeetings(meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let n = meetings.length;
  for (let i = 0; i < n - 1; i++) {
    if (overlap(meetings[i], meetings[i + 1])) {
      return false;
    }
  }
  return true;
}

console.log(
  canAttendMeetings([
    [0, 1],
    [5, 10],
    [15, 20]
  ])
);
