Array.prototype.swap = function (x,y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
  }

const partition = (A, start, end) => {
    const pivot = A[end]; // if our partition logic is always the last element in the array

    let pIndex = start; // initialize the partition index to the start of the array

    for (let i = start; i < end; i++) {
        if (A[i] < pivot) {
            A.swap(i, pIndex);
            pIndex += 1;
        }
    }

    A.swap(pIndex, end);

    return pIndex;
};

const quickSort = (A, start, end) => {
    if (start < end) {
        const pIndex = partition(A, start, end);

        quickSort(A, start, pIndex - 1);
        quickSort(A, pIndex + 1, end);
    }
};

let input = [7, 20, 1, 6, 8, 5, 3, 4, 200];

quickSort(input, 0, 7);

console.log(input);