import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsCrudFormComponent } from './actions-crud-form.component';

describe('ActionsCrudFormComponent', () => {
  let component: ActionsCrudFormComponent;
  let fixture: ComponentFixture<ActionsCrudFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsCrudFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsCrudFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
