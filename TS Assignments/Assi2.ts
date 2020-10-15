function getPower(x:number, y:number){

    var result:number = 1;
    while (y != 0) {
        result = result * x;
        --y;
    }
    return result;
}

console.log(getPower(2,5));