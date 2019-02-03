import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstudentshowComponent } from './userstudentshow.component';

describe('UserstudentshowComponent', () => {
  let component: UserstudentshowComponent;
  let fixture: ComponentFixture<UserstudentshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstudentshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstudentshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
