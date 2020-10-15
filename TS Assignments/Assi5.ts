function strJoin(sep:string, ...str:string[]){

    var str1:string[] = str.sort();
    console.log(str1.join(sep));
}

strJoin("#","ABC","XYZ","PQR");
strJoin(",","005","003","002","001","004");