var arr = [10, 20, 30, 40, 50];
function arrOp(arr) {
    console.log("Minimum is " + Math.min.apply(Math, arr));
    console.log("Maximum is " + Math.max.apply(Math, arr));
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        sum = sum + i;
    }
    console.log("Sum is " + sum);
    console.log("Average is " + (sum / arr.length));
}
arrOp(arr);
