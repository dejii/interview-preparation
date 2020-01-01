
"""

    A hotel manager has to process N advance bookings of rooms for the next season. His hotel has K rooms. Bookings contain an arrival date and a departure date. He wants to find out whether there are enough rooms in the hotel to satisfy the demand. Write a program that solves this problem in time O(N log N) .

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
            Arrivals :   [1 3 5]
            Departures : [2 6 8]
            K : 1

    Return : False / 0 

    At day = 5, there are 2 guests in the hotel. But I have only one room.
"""

"""
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
"""

def hotelBookingsPossible(arrive, depart, K):
    if not K: return False

    arrive = list(zip(arrive, [1]*len(arrive)))
    depart = list(zip(depart, [-1]*len(arrive)))
    s = sorted(arrive + depart)
                
    i = 0
    overlaps = 0
    s = list(s)
    while i < len(s):
        overlaps += s[i][1]
        if overlaps > K:
            return False
        i += 1
    return True

arrive = [1,3,5]
depart = [2,6,8]
rooms = 1
print (hotelBookingsPossible(arrive, depart, rooms))