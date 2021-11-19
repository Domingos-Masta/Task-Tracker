import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCrudFormComponent } from './team-crud-form.component';

describe('TeamCrudFormComponent', () => {
  let component: TeamCrudFormComponent;
  let fixture: ComponentFixture<TeamCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
