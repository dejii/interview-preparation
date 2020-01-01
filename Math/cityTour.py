

def cityTour(A, B):
    # visited = set(B)
    visited = {x: i for i, x in enumerate(B)}
    # return visited
    # not_visited = set()
    not_visited = {}
    
    #can_visit = set()
    can_visit = []
    
    for i in range(1, A + 1):
        if i not in visited:
            not_visited[i] = i
            
    # return not_visited
    for key in not_visited:
        # if (not_visited[key] != 0) and ((not_visited[key] + 1) < A):
        can_visit.append(key)

    return can_visit
    
    from itertools import permutations 
    l = list(permutations(can_visit))
    return len(l) % ((10**9)+7)

print(cityTour(3, [1]))