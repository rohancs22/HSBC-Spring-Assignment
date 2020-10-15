import {Product} from './Assi6';

var p:Product[] = [new Product(101,"ABC"),
                    new Product(102,"XYZ"),
                    new Product(103,"PQR")];

export function getAllProducts(p:Product[]){
    for(var i of p){
        console.log(i);
    }
}

getAllProducts(p);