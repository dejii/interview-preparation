/*
Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, 
there may exist one celebrity. The definition of a celebrity is that all the other n - 1
 people know him/her but he/she does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. 
The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" 
to get information of whether A knows B. You need to find out the celebrity (or verify there is not one)
 by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function 
int findCelebrity(n), your function should minimize the number of calls to knows.

Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if 
there is a celebrity in the party. If there is no celebrity, return -1.
 */

function knows(a, b) {
  // function already implemented which tells us whether a knows b
}

function findTheCelebrity(n) {
  let celebrity = 0;
  for (let i = 1; i < n; i++) {
    // find candidate
    if (knows(celebrity, i)) {
      celebrity = i;
    }
  }

  for (let i = 0; i < n; i++) {
    if (i !== celebrity && (knows(celebrity, i) || !knows(i, celebrity))) {
      return -1;
    }
  }
  return celebrity;
}

/**
 * 
 * Logical Thinking
It is inductive that we can find the candidate and check whether it is up to standard or not.
How do we decide the candidate?
We are sure that if A knows B, A cannot be the celebrity while B may be, i.e., 
B is the candidate. Since there is only one celebrity, one loop is enough to decide the candidate.
How do we check whether the candidate is up to standard?
According to the definition of a celebrity, if !knows(i, candidate) || knows(candidate, i) exists, 
the candidate is not qualified.

Clear Java Code

    public int findCelebrity(int n) {
        int candidate = 0;
        for (int i = 1; i < n; i++) {
            if (knows(candidate, i)) { 
                candidate = i;
            }
        }
        for (int i = 0; i < n; i++) {
            if (i == candidate) {
                continue;
            }
            if (!knows(i, candidate) || knows(candidate, i)) {
                return -1;
            }
        }
        return candidate;        
    }
    
 * public int findCelebrity(int n) {
    // base case
    if (n <= 0) return -1;
    if (n == 1) return 0;
    
    Stack<Integer> stack = new Stack<>();
    
    // put all people to the stack
    for (int i = 0; i < n; i++) stack.push(i);
    
    int a = 0, b = 0;
    
    while (stack.size() > 1) {
        a = stack.pop(); b = stack.pop();
        
        if (knows(a, b)) 
            // a knows b, so a is not the celebrity, but b may be
            stack.push(b);
        else 
            // a doesn't know b, so b is not the celebrity, but a may be
            stack.push(a);
    }
    
    // double check the potential celebrity
    int c = stack.pop();
    
    for (int i = 0; i < n; i++)
        // c should not know anyone else
        if (i != c && (knows(c, i) || !knows(i, c)))
            return -1;
    
    return c;
}


 */
