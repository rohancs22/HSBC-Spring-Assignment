function getSum(n) {
    var sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = n / 10;
    }
    return Math.floor(sum);
}
console.log(getSum(12345));
