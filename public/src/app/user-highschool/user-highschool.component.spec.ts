import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHighschoolComponent } from './user-highschool.component';

describe('UserHighschoolComponent', () => {
  let component: UserHighschoolComponent;
  let fixture: ComponentFixture<UserHighschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHighschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHighschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
