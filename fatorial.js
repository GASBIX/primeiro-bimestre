console.log(fatorial(5))

function fatorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++ ) {
        result *= i;
    }
    return result;

}
