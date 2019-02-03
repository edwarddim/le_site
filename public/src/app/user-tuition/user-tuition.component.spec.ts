import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTuitionComponent } from './user-tuition.component';

describe('UserTuitionComponent', () => {
  let component: UserTuitionComponent;
  let fixture: ComponentFixture<UserTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
