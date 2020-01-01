/*
There are n flights, and they are labeled from 1 to n.

We have a list of flight bookings.  
The i-th booking bookings[i] = [i, j, k] means that we booked k seats from flights labeled i to j inclusive.

Return an array answer of length n, representing the number of seats booked on each flight in order of their label.

 

Example 1:

Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
Output: [10,55,45,25,25]
 

Constraints:

1 <= bookings.length <= 20000
1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
1 <= bookings[i][2] <= 10000

*/

function corperateFlightBookings(bookings, n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(0);
    }

    for (let booking of bookings) {
        const [bookingI, bookingJ, count] = booking;
        result[bookingI-1] += count;
        result[bookingJ] -= count;
    }
    let sum = 0;
    for(let i = 0; i < result.length; i++) {
        sum += result[i];
        result[i] = sum;
    }

    return result.slice(0, -1)
}
let a = [[1,2,10],[2,3,20],[2,5,25]];
console.log(corperateFlightBookings(a,5))