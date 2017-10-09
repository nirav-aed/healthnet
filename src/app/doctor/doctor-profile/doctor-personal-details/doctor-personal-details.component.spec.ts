import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPersonalDetailsComponent } from './doctor-personal-details.component';

describe('DoctorPersonalDetailsComponent', () => {
  let component: DoctorPersonalDetailsComponent;
  let fixture: ComponentFixture<DoctorPersonalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPersonalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
