import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  constructor() {}

  formFields = {
    firstName: '',
    lastName: '',
    contactEmail: '',
    paypalEmail: '',
    birthday: '',
    country: '',
    password: '',
    passwordConfirm: '',
  };

  ngOnInit() {}

  saveChanges() {
    if (this.formFields.password !== this.formFields.passwordConfirm) {
      console.log('No match');
    }
  }
}
