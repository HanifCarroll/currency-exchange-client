import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
})
export class EditAccountComponent implements OnInit {
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
    console.log(this.formFields);
  }
}
