import { Component, ViewChild, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import {Router } from '@angular/router'
import { DialogService } from './dialog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency-exchange-client';
  @ViewChild('drawer') drawer;

  constructor(public dialog: MatDialog, 
    public router: Router,
    private dialogService: DialogService) {}

  toggleSideNav() {
    this.drawer.toggle();
  }
}
