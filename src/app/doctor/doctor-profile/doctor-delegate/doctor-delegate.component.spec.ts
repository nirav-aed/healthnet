import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDelegateComponent } from './doctor-delegate.component';

describe('DoctorDelegateComponent', () => {
  let component: DoctorDelegateComponent;
  let fixture: ComponentFixture<DoctorDelegateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDelegateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorDelegateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
