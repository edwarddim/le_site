import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTuitionComponent } from './admin-tuition.component';

describe('AdminTuitionComponent', () => {
  let component: AdminTuitionComponent;
  let fixture: ComponentFixture<AdminTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
