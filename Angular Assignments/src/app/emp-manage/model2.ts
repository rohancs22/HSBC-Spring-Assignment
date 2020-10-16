export class Model2 {

  emp:Employee[];

  constructor() {
    this.emp = [new Employee(101,"ABC",10000,"HR"),
                  new Employee(102,"PQR",15000,"Tester"),
                  new Employee(103,"XYZ",20000,"Developer"),
                  new Employee(104,"DEF",25000,"Manager")]
  }
}

export class Employee {
  empno:number;
  ename:string;
  salary:number;
  desig:string;
  constructor(empno,ename,salary,desig) {
    this.empno = empno;
    this.ename = ename;
    this.salary = salary;
    this.desig = desig;
  }
}