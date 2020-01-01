

const maxSubArray = (A) => {
    store = {}
        
    let currentSum = 0
    let currentArr = []

    for (let i = 0; i < A.length; i++) {
        currentArr.push(A[i])
        c = [...currentArr]
        c.push(A[i])
        store[currentSum + A[i]] = c
    }
        
    

    return store
}

const arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))