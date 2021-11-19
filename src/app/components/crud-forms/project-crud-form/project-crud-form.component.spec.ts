import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCrudFormComponent } from './project-crud-form.component';

describe('ProjectCrudFormComponent', () => {
  let component: ProjectCrudFormComponent;
  let fixture: ComponentFixture<ProjectCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
