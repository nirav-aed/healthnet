import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSuperSpecializationComponent } from './doctor-super-specialization.component';

describe('DoctorSuperSpecializationComponent', () => {
  let component: DoctorSuperSpecializationComponent;
  let fixture: ComponentFixture<DoctorSuperSpecializationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSuperSpecializationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSuperSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
