/*
     You are in an infinite 2D grid where you can move in any of the 8 directions :

    (x,y) to 
    (x+1, y), 
    (x - 1, y), 
    (x, y+1), 
    (x, y-1), 
    (x-1, y-1), 
    (x+1,y+1), 
    (x-1,y+1), 
    (x+1,y-1) 

    You are given a sequence of points and the order in which you need to cover the points. 
    Give the minimum number of steps in which you can achieve it. You start from the first point.

    Given two integer arrays A and B, where A[i] is x coordinate and B[i] is y coordinate of ith point respectively.

    Return an Integer, i.e minimum number of steps.

    Input : [(0, 0), (1, 1), (1, 2)]
    Output : 2

    It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).
*/

const coverPoints = (A, B) => {
    arr = a.map((s, i) => [s, B[i]])

    console.log(arr);
    let s = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        s += steps(arr[i], arr[i + 1]);
    }

    return s;
};

const steps = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;

    const x = Math.abs(x1 - x2);
    const y = Math.abs(y1 - y2);

    return Math.max(x, y);
};

const a = [1,2,3,4];
const b = [5,6,7,8];

console.log(coverPoints(a,b));