
c = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 3],
    [4, 5, 6, 8]
];

const printSpiral = (A, m, n) => {
    /* 
        m = no of rows
        n = no of cols
        T = topmost row, B = Last row
        L = first column, R = last column
        dir = direction | 0 => left - right | 1 => top - bottom | 2 => right - left | 3 bottom - top
    */
    let T = 0;
    let B = m - 1;
    let L = 0;
    let R = n - 1;
    let dir = 0;

    while (T <= B && L <= R) {
        if (dir === 0) {
            for (let i = L; i <= R; i++) {
                console.log(A[T][i]);
            }
            T++; 
            dir = 1;
        } else if (dir === 1) {
            for (let i = T; i <= B; i++) {
                console.log(A[i][R]);
            }
            R--;
            dir = 2;
        } else if (dir === 2) {
            for (i = R; i >= L; i--) {
                console.log(A[B][i]);
            }
            B--;
            dir = 3;
        } else if (dir === 3) {
            for (i = B; i >= T; i--) {
                console.log(A[i][L]);
            }
            L++;
            dir = 0;
        }

        // or we can refactor the direction dir into
        // dir = (dir + 1) % 4
    }
}

printSpiral(c, 4, 4);