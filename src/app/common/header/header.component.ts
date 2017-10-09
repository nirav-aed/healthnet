import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  /* userMenuOpen: boolean = false; */
  @Output() menuOpened = new EventEmitter<boolean>();

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openLoginDialog(){
    let loginDialogRef = this.dialog.open(LoginComponent, {width: this.getDialogWidth()});
  }

  openSignupDialog(){
    let signupDialogRef = this.dialog.open(SignupComponent, {width: this.getDialogWidth()});    
  }

  getDialogWidth(){
    if(document.body.clientWidth<768){
      return '80%';
    }
    else{
      return '500px';
    }
  }

  openMenu(){
    this.menuOpened.emit(true);
  }
}
