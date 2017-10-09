import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-personal-details',
  templateUrl: './doctor-personal-details.component.html',
  styleUrls: ['./doctor-personal-details.component.css']
})
export class DoctorPersonalDetailsComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
  }

}
