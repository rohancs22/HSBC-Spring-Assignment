import { Component, OnInit } from '@angular/core';
import { Model1 } from '../people-model/model1'

@Component({
  selector: 'app-people-model',
  templateUrl: './people-model.component.html',
  styleUrls: ['./people-model.component.css']
})
export class PeopleModelComponent {

  constructor() { }
  model = new Model1();

  getAllPeople(){
    return this.model.people;
  }

 
  
}
