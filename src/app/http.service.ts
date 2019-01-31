import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
result: any = 0
  constructor(private httpClient: HttpClient) { 
  }

  getCalculation(from, to, amount) {

    return this.httpClient.get(`http://localhost:8080/exchange/${from}/${to}/${amount}`)
    .subscribe(result => this.result = result)
      
  }
}
