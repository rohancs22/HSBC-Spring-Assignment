import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleModelComponent } from './people-model.component';

describe('PeopleModelComponent', () => {
  let component: PeopleModelComponent;
  let fixture: ComponentFixture<PeopleModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
