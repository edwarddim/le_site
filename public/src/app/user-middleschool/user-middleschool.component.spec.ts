import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMiddleschoolComponent } from './user-middleschool.component';

describe('UserMiddleschoolComponent', () => {
  let component: UserMiddleschoolComponent;
  let fixture: ComponentFixture<UserMiddleschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMiddleschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMiddleschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
