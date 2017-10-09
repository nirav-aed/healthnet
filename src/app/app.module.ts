import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MatDialogModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatDatepickerModule,
  MdNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatMenuModule,
  MatExpansionModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { UserMenuComponent } from './common/user-menu/user-menu.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UserLeftMenuComponent } from './common/user-left-menu/user-left-menu.component';
import { DoctorPersonalDetailsComponent } from './doctor/doctor-profile/doctor-personal-details/doctor-personal-details.component';
import { DoctorContactDetailsComponent } from './doctor/doctor-profile/doctor-contact-details/doctor-contact-details.component';
import { DoctorMedicalDegreeComponent } from './doctor/doctor-profile/doctor-medical-degree/doctor-medical-degree.component';
import { DoctorSpecializationComponent } from './doctor/doctor-profile/doctor-specialization/doctor-specialization.component';
import { DoctorSuperSpecializationComponent } from './doctor/doctor-profile/doctor-super-specialization/doctor-super-specialization.component';
import { DoctorAffiliationComponent } from './doctor/doctor-profile/doctor-affiliation/doctor-affiliation.component';
import { DoctorDelegateComponent } from './doctor/doctor-profile/doctor-delegate/doctor-delegate.component';
import { DoctorRatingComponent } from './doctor/doctor-profile/doctor-rating/doctor-rating.component';
import { DoctorProfileComponent } from './doctor/doctor-profile/doctor-profile.component';

const appRoutes: Routes = [
  /* { path: '', component: DoctorComponent }, */
  { path: 'doctor', component: DoctorComponent, children:[
    { path: '', component: DoctorProfileComponent },
    { path: 'profile', component: DoctorProfileComponent, children: [
      { path: '', component: DoctorPersonalDetailsComponent },
      { path: 'personal-details', component: DoctorPersonalDetailsComponent },
      { path: 'contact-details', component: DoctorContactDetailsComponent },
      { path: 'medical-degree', component: DoctorMedicalDegreeComponent },
      { path: 'specialization', component: DoctorSpecializationComponent },
      { path: 'super-specialization', component: DoctorSuperSpecializationComponent },
      { path: 'affiliation', component: DoctorAffiliationComponent },
      { path: 'delegate', component: DoctorDelegateComponent },
      { path: 'rating-and-feedback', component: DoctorRatingComponent }
    ] }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    UserMenuComponent,
    DoctorComponent,
    UserLeftMenuComponent,
    DoctorPersonalDetailsComponent,
    DoctorContactDetailsComponent,
    DoctorMedicalDegreeComponent,
    DoctorSpecializationComponent,
    DoctorSuperSpecializationComponent,
    DoctorAffiliationComponent,
    DoctorDelegateComponent,
    DoctorRatingComponent,
    DoctorProfileComponent
  ],
  entryComponents: [ LoginComponent, SignupComponent ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MdButtonModule,
    MdCheckboxModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatDatepickerModule,
    MdNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
