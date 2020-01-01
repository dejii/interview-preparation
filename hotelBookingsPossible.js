/*

    A hotel manager has to process N advance bookings of rooms for the next season.
     His hotel has K rooms. Bookings contain an arrival date and a departure date. 
     He wants to find out whether there are enough rooms in the hotel to satisfy the demand. 
     Write a program that solves this problem in time O(N log N) .

    Input:


    First list for arrival time of booking.
    Second list for departure time of booking.
    Third is K which denotes count of rooms.

    Output:

    A boolean which tells whether its possible to make a booking. 
    Return 0/1 for C programs.
    O -> No there are not enough rooms for N booking.
    1 -> Yes there are enough rooms for N booking.
    Example :

    Input : 
            Arrivals :   [1 3 5] [(1,1), (2, 1), (2,-1) (3,1) (5,1), (6,-1), (8,-1)]
            Departures : [2 6 8] [  ]
            K : 1

    Return : False / 0 

    At day = 5, there are 2 guests in the hotel. But I have only one room.
*/

/*
    Algo:
    append 1 to each arrival -> [[1,1], [3,1], [5,1]]
    append -1 to each departure -> [[2,-1],[6,-1],[8,-1]]
    concat -> [[1,1], [3,1], [5,1], [2,-1],[6,-1],[8,-1]]
    sort according to arrival and departure dates ie the 1st element-> [[1,1], [2,-1], [3,1], [5,1],[6,-1],[8,-1]]
    loop and increment/decrement count
    iterations:
        1st -> count = 1
        2nd -> count = 0
        3rd -> count = 1
        4th -> count = 2 // ** at this point our bookings is over our number of rooms (1), so we return false
        5th -> count = 1
        6th -> count = 0
        
    here we return true after the iterations and our count never exceeded our number of rooms
*/
function hotelBookingsPossible() {
    
    var arrivals = []
    for (var i = 0; i < A.length; i++) {
        arrivals.push([A[i], 1])
    }
    
    // append -1 to each departure
    var departures = [];
    for (var i = 0; i < B.length; i++) {
        departures.push([B[i], -1]) 
    }
    
    // sort the array so as we move through, we can account for an arrival or a departure in the right order
    // sort to arrange arrival dates in ascending order
    var bookings = arrivals.concat(departures).sort(function(a, b) {
        // while running on interview bit, noticed and edge case where we had arrivals and departures on the same day,
        // in that we ensure the departure comes before the arrival
        if (a[0] == b[0]) {
            if (a[1] < b[1]) return -1
            if (a[1] > b[1]) return 1  
            }
        if (a[0] < b[0]) return -1
        if (a[0] > b[0]) return 1
        return 0
    });
    var bookingsCount = 0;
    // for each booking, if it is an arrival add 1 to our bookingsCount, if it's a departure subtract 1 from our bookingsCount
    // if at any period the bookingsCount is greater than C which is our number of rooms, we return false meaning that there are no
    // enough rooms to satisfy the demand else we return true
    for (var i = 0; i < bookings.length; i++) {
        // since we've assigned arrivals and departures to +1 and -1 resp, we take the second item in the array and sum it to our count
        bookingsCount += bookings[i][1]
        
        if (bookingsCount > C) {
            return 0 
        }
    }
    
    return 1
}