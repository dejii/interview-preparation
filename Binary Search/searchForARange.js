

function bsLeft(A, B) {
    let low = 0;
    let high = A.length - 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (A[mid] === B) {
            if (mid === 0 || A[mid - 1] !== B) {
                return mid;
            }
            high = mid - 1;
        } else if (B < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return -1;
}

function bsRight(A, B) {
    let low = 0;
    let high = A.length - 1;

    while(low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        if (A[mid] === B) {
            if ((mid + 1) >= A.length || A[mid + 1] !== B) {
                return mid;
            }
            low = mid + 1;
        } else if (B < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
    return -1;
}

function searchRange(A, B) {
    return [bsLeft(A,B), bsRight(A,B)]
}

const a = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]
const b = 10
console.log(searchRange(a,b))