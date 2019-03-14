import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Credentials} from "./Credentials";

@Component({
  selector: 'app-customer',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  credentialsForm: FormGroup;
  credentials = new Credentials();

  constructor() {
  }

  ngOnInit() {
    this.credentialsForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })
  }
}
