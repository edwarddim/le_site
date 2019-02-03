import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentShowComponent } from './admin-student-show.component';

describe('AdminStudentShowComponent', () => {
  let component: AdminStudentShowComponent;
  let fixture: ComponentFixture<AdminStudentShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
