import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
})
export class AccountFormComponent implements OnInit {
  accountForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    contactEmail: ['', [Validators.required, Validators.email]],
    paypalEmail: ['', [Validators.required, Validators.email]],
    birthday: ['', [Validators.required]],
    country: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
  });

  @Input() buttonText;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  saveChanges() {
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
