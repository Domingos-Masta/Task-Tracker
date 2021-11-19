import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCrudFormComponent } from './task-crud-form.component';

describe('TaskCrudFormComponent', () => {
  let component: TaskCrudFormComponent;
  let fixture: ComponentFixture<TaskCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
