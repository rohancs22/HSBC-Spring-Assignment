var arr:number[] = [10,20,30,40,50];

function arraySquare(arr:number[]){
    var arr1:number[] = arr.map(i=>i*i);
    return arr1;
}

var square = arraySquare(arr);
console.log(square);
