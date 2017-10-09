import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MdDialog, public dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  login(){
    
  }

  openSignUpDialog(){
    this.dialogRef.close();
    this.dialog.open(SignupComponent);
  }
}
