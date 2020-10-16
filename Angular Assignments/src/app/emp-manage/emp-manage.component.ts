import { Component, OnInit } from '@angular/core';
import { Employee, Model2 } from './model2';

@Component({
  selector: 'app-emp-manage',
  templateUrl: './emp-manage.component.html',
  styleUrls: ['./emp-manage.component.css']
})

export class EmpManageComponent {

  listcheck:boolean=false;
  tablecheck:boolean=false;

  constructor() { }
  model = new Model2();

  getAllEmp(){
    this.tablecheck=true;
    this.listcheck=false;
    return this.model.emp;
  }

  getEmpList(){
    this.tablecheck=true;
    this.listcheck=false;
    return this.model.emp;
  }

  clearData(){
    this.listcheck=false;
    this.tablecheck=false;
  }
}