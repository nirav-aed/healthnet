import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorContactDetailsComponent } from './doctor-contact-details.component';

describe('DoctorContactDetailsComponent', () => {
  let component: DoctorContactDetailsComponent;
  let fixture: ComponentFixture<DoctorContactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorContactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
