var arr:number[] = [10,20,30,40,50];

function arrOp(arr:number[]){

    console.log("Minimum is " + Math.min(...arr));
    console.log("Maximum is " + Math.max(...arr));
    var sum:number = 0;
    for(var i of arr){
        sum = sum + i;
    }
    console.log("Sum is " + sum);
    console.log("Average is " + (sum/arr.length));
}

arrOp(arr);