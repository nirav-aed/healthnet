import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAffiliationComponent } from './doctor-affiliation.component';

describe('DoctorAffiliationComponent', () => {
  let component: DoctorAffiliationComponent;
  let fixture: ComponentFixture<DoctorAffiliationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorAffiliationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAffiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
