/*
You are given a read only array of n integers from 1 to n.

Each integer appears exactly once except A which appears twice and B which is missing.

Return A and B.

Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Note that in your output A should precede B.

Example:

Input:[3 1 2 5 3] 

Output:[3, 4] 

A = 3, B = 4
*/

const repeatAndMissingNumberArray = (A) => {
    const store = new Set();
    let m = 0;
    let n = 0
    for (const a of A) {
        if (store.has(a)) {
            m = a;
        } else {
            store.add(a);
        }
    }
    for (let i = 1; i < A.length + 1; i++) {
        if (!store.has(i)) {
            n = i;
            break;
        }
    }
    return [m,n]
};

const a = [3,1,2,5,3];
console.log(repeatAndMissingNumberArray(a))