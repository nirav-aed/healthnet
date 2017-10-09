import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorMedicalDegreeComponent } from './doctor-medical-degree.component';

describe('DoctorMedicalDegreeComponent', () => {
  let component: DoctorMedicalDegreeComponent;
  let fixture: ComponentFixture<DoctorMedicalDegreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorMedicalDegreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorMedicalDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
