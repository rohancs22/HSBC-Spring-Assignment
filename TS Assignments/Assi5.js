function strJoin(sep) {
    var str = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        str[_i - 1] = arguments[_i];
    }
    var str1 = str.sort();
    console.log(str1.join(sep));
}
strJoin("#", "ABC", "XYZ", "PQR");
strJoin(",", "005", "003", "002", "001", "004");
