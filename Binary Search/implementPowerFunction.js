

function implementPowerFunction(x, n, d) {
    var result = 1;
    var base = x % d;

    while(n > 0) {
        if (n & 1) {
            result = (result * base) % d
        }
        n = n >> 1;
        base = (base * base) % d;
    }
    return result;
}

console.log(implementPowerFunction(2,1,3))