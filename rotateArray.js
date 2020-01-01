
const rotateArray = (A, B) => {
    // A - array
    // B - no of times

    if (B > A.length) {
        B = B %= A.length;
    }

    const ret = [];

    const temp = A.slice(0, B);

    for (let i = 0; i < A.length - B; i++) {
        ret.push(A[i + B]);
    }

    ret.push(...temp);
    return ret;
};

const A = [1,2,3,4,5,6,7,8];

console.log(rotateArray(A, 2))