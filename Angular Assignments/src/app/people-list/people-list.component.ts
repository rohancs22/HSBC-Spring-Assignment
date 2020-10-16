import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  constructor() { }

  people:any[]=[
    {name:"ABC",age:22,gender:"Male"},
    {name:"PQR",age:23,gender:"Male"},
    {name:"XYZ",age:24,gender:"Female"}
  ]
 
}
