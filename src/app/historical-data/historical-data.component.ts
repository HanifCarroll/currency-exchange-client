import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  year: number;
  USD: string;
  pound: string;
  Euro: string
  Yen: string;
  Peso: String;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {year: 2019, USD: '1', pound: '0.56', Euro: '0.78', Yen:'3.6',Peso:'78'},
  {year: 2018, USD: '1', pound: '0.63', Euro: '1.01', Yen:'3.7',Peso:'100'},
  {year: 2017, USD: '1', pound: '0.78', Euro: '0.95', Yen:'3.9',Peso:'120'},
  {year: 2016, USD: '1', pound: '0.90', Euro: '0.89', Yen:'4.2',Peso:'90'},
  {year: 2015, USD: '1', pound: '0.85', Euro: '0.96', Yen:'2.6',Peso:'80'},
    
];
@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  styleUrls: ['./historical-data.component.css']
})
export class HistoricalDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  displayedColumns: string[] = ['year', 'USD', 'pound', 'Euro','Yen','Peso'];
  dataSource = ELEMENT_DATA;

}
