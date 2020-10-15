function getPower(x, y) {
    var result = 1;
    while (y != 0) {
        result = result * x;
        --y;
    }
    return result;
}
console.log(getPower(2, 5));
