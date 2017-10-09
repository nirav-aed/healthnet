import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public dialog: MdDialog, public signupDialogRef: MdDialogRef<SignupComponent>) { }

  ngOnInit() {
  }

  openLoginDialog(){
    this.signupDialogRef.close();
    let dialogRef = this.dialog.open(LoginComponent);
  }
}
