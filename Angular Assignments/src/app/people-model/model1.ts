export class Model1 {
  
  people:People[];

  constructor() {
    
    this.people = [new People("ABC", 22,"Male"),
                  new People("PQR", 23,"Male"),
                  new People("XYZ", 24,"Female"),
                  new People("DEF", 25,"Female")]
  }
}

export class People {
  pname:string;
  age:number;
  gender:string;
  constructor(pname, age, gender) {
    this.pname = pname;
    this.age = age;
    this.gender = gender;
  }
}