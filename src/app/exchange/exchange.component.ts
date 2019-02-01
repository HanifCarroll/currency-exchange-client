import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css'],
})
export class ExchangeComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  from = 'usd';
  to = 'euro';
  amount;
  currencies = [
    { value: 'usd', text: 'Dollar ($)' },
    { value: 'pound', text: 'Pound (£)' },
    { value: 'euro', text: 'Euro (€)' },
    { value: 'yen', text: 'Yen (¥)' },
    { value: 'peso', text: 'Peso ($)' },
  ];
  availableCurrencies = [
    { value: 'pound', text: 'Pound (£)' },
    { value: 'euro', text: 'Euro (€)' },
    { value: 'yen', text: 'Yen (¥)' },
    { value: 'peso', text: 'Peso ($)' },
  ];

  calculateResult(from, to, amount) {
    from = from.toLowerCase();
    to = to.toLowerCase();

    return this.httpService.getCalculation(from, to, amount);
  }

  onSelect(value) {
    this.availableCurrencies = this.currencies.filter(
      currency => currency.value !== value,
    );
  }

  ngOnInit() {}
}
