import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSpecializationComponent } from './doctor-specialization.component';

describe('DoctorSpecializationComponent', () => {
  let component: DoctorSpecializationComponent;
  let fixture: ComponentFixture<DoctorSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
