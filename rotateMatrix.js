/*
    You are given an n x n 2D matrix representing an image.

    Rotate the image by 90 degrees (clockwise).

    You need to do this in place.

    Note that if you end up using an additional array, you will only receive partial score.

    Example:

    If the array is

    [
        [1, 2],
        [3, 4]
    ]
    Then the rotated array becomes:

    [
        [3, 1],
        [4, 2]
    ]
*/

/*
    Solution
    The indexes of 
    [
        [1, 2],
        [3, 4]
    ]
    are 
    [
        [00, 01],
        [10, 11]
    ]

    The indexes of our solution is
    [
        [3, 1],
        [4, 2]
        
        [10, 00],
        [11, 01]
    ]

    We can see from our solution that each index is a reverse of the array of each index reversed
    if we reverse each index 00, 01 we have 00, 10 and when we reverse the array we have 10 00


*/
function rotateMatrix(A) {

    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            var temp = A[i][j]
            A[i][j] = A[j][i]
            A[j][i] = temp
        }
    }

    // for (let i = 0; i < A.length; i++) {
    //     A[i].reverse()
    // }

    // reverse array in place
    for (let i = 0; i < A.length; i++) {
        var arr = A[i]
        for (j = 0; j < A.length / 2; j++) {
          var temp = arr[j]
          arr[j] = arr[arr.length - j - 1]
          arr[arr.length - j - 1] = temp  
        }
    }

    return A

}

const input = [
    [1, 2,3],
    [4, 5 ,6],
    [7,8,9]
];
console.log(rotateMatrix(input))