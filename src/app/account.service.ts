import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// interface of type Account
export interface Account {
  id: number;
  firstName: string;
  lastName: string;
  contactEmail: string;
  payPalEmail: string;
  dateOfBirth: string;
  contryOfResidence: string;
  transactions: [
    {
      id: number;
      currencyFrom: string;
      currencyTo: string;
      rate: number;
      amountFrom: number;
      amountTo: number;
      date: string;
    }
  ];
}

// the options we pass into our HTTP requests
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // this URL would be localhost:8081/exchange/account for you...
  accountUrl = 'http://localhost:8081/exchange/account';

  constructor(private http: HttpClient) {}

  // gets all accounts and returns an Observable, the Observable must be subscribed to
  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountUrl, httpOptions);
  }
}
