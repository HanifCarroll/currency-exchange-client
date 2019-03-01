import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  // where we are going to store our array of accounts
  accountArray;

  // inject the AccountService via the constructor
  constructor(private account: AccountService) {}

  // when the component is initialized, make sure you have the accounts
  ngOnInit() {
    this.initializeAccounts();
  }

  // this method initializes the accounts array by subscribing to the Observable from the AccountService and storing the data into our accountArray
  initializeAccounts() {
    this.account.getAllAccounts().subscribe(data => (this.accountArray = data));
  }
}
