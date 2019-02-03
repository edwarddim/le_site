import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClassShowComponent } from './admin-class-show.component';

describe('AdminClassShowComponent', () => {
  let component: AdminClassShowComponent;
  let fixture: ComponentFixture<AdminClassShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminClassShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
