import { Component, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-exchange-client';
  @ViewChild('drawer') drawer;
 
  toggleSideNav() {
    this.drawer.toggle()
  }
}

