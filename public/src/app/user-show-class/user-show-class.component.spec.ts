import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShowClassComponent } from './user-show-class.component';

describe('UserShowClassComponent', () => {
  let component: UserShowClassComponent;
  let fixture: ComponentFixture<UserShowClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
