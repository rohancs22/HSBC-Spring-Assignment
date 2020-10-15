"use strict";
exports.__esModule = true;
exports.getAllProducts = void 0;
var Assi6_1 = require("./Assi6");
var p = [new Assi6_1.Product(101, "ABC"),
    new Assi6_1.Product(102, "XYZ"),
    new Assi6_1.Product(103, "PQR")];
function getAllProducts(p) {
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var i = p_1[_i];
        console.log(i);
    }
}
exports.getAllProducts = getAllProducts;
getAllProducts(p);
