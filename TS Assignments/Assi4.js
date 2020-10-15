var arr = [10, 20, 30, 40, 50];
function arraySquare(arr) {
    var arr1 = arr.map(function (i) { return i * i; });
    return arr1;
}
var square = arraySquare(arr);
console.log(square);
