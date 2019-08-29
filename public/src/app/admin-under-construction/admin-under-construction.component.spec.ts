import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnderConstructionComponent } from './admin-under-construction.component';

describe('AdminUnderConstructionComponent', () => {
  let component: AdminUnderConstructionComponent;
  let fixture: ComponentFixture<AdminUnderConstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnderConstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnderConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
