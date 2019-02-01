import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  from = 'usd'
  to = 'euro'
  amount


  calculateResult(from, to, amount) {
    from = from.toLowerCase()
    to = to.toLowerCase()
   return this.httpService.getCalculation(from, to, amount)

    
  }

  ngOnInit() {
  }

}
