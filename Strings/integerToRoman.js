

function intergerToRoman(A) {
    var mapper = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ]
    result = ''
    
    for (var i = 0; i < mapper.length; i++) {
        var count = Math.floor(A / mapper[i][0])
        A -= count * mapper[i][0]
        while (count > 0) {
            result += mapper[i][1]
            count--
        }
        
        if (!A) {
            break
        }
    }
    
    return result
}

var a = 1234
console.log(intergerToRoman(a))