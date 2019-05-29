import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserElementaryComponent } from './user-elementary.component';

describe('UserElementaryComponent', () => {
  let component: UserElementaryComponent;
  let fixture: ComponentFixture<UserElementaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserElementaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserElementaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
