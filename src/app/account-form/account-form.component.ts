import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
  accountForm = this.fb.group({
    //Validates firstName to check if it is entered and a string value 
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    //Validates lastName to check if it is entered and a string value
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    //Validates contactEmail to check if it is entered and in email format
    contactEmail: ['', [Validators.required, Validators.email]],
    //Validates paypalEmail to check if it is entered and in email format
    paypalEmail: ['', [Validators.required, Validators.email]],
    //Validates birthday to check if it is entered
    birthday: ['', [Validators.required]],
    //Validates country to check if it is entered and a string value 
    country: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    //Validates password to check if it is entered and is minimum length of 6 characters
    password: ['', [Validators.required, Validators.minLength(6)]],
    //Validates passwordConfirm to check if it is entered and is minimum length of 6 characters
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  });

  @Input() buttonText;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  saveChanges() {
    //Checks to make sure password and passwordConfirm fields are both identical to each
    if (!this.checkEqualPasswords()) {
      console.log("Passwords don't match");
    }
  }

  checkEqualPasswords() {
    const password = this.accountForm.get('password').value;
    const passwordConfirm = this.accountForm.get('passwordConfirm').value;

    return password === passwordConfirm;
  }
}
