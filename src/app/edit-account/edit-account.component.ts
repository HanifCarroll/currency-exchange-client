import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

export interface AccountTrans {
  id: number;
  currencyFrom: string;
  currencyTo: string;
  rate: number;
  dateOfTransaction: string;
}

const ELEMENT_DATA: AccountTrans[] = [
  {
    id: 9,
    currencyFrom: 'YEN',
    currencyTo: 'USD',
    rate: 5.75,
    dateOfTransaction: '2019-02-01 12:10:30',
  },
  {
    id: 6,
    currencyFrom: 'EURO',
    currencyTo: 'USD',
    rate: 0.5,
    dateOfTransaction: '2019-02-01 12:10:30',
  },
  {
    id: 7,
    currencyFrom: 'YEN',
    currencyTo: 'EURO',
    rate: 10.75,
    dateOfTransaction: '2019-02-05 12:14:36',
  },
  {
    id: 5,
    currencyFrom: 'POUND',
    currencyTo: 'USD',
    rate: 1.75,
    dateOfTransaction: '2019-02-07 10:16:36',
  },
];

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css'],
})
export class EditAccountComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'currencyFrom',
    'currencyTo',
    'rate',
    'dateOfTransaction',
  ];
  dataSource = ELEMENT_DATA;

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

  constructor() {}

  ngOnInit() {}

  saveChanges() {
    console.log(this.formFields);
  }
}
