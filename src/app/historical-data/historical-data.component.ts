import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  from: string;
  year: number;
  to: string;
  rate: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {year: 2019, from: 'Dollar', to: 'Dollar', rate: 1},
  {year: 2018, from: 'Yen', to: 'Yen', rate: 2},
  {year: 2017, from: 'Peso', to: 'Peso', rate: 3}
  
    
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
  displayedColumns: string[] = ['year', 'from', 'to', 'rate'];
  dataSource = ELEMENT_DATA;

}
