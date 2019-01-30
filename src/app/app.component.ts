import { Component, ViewChild, Input, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'currency-exchange-client';
  @ViewChild('drawer') drawer;

  constructor(public dialog: MatDialog) {}

  toggleSideNav() {
    this.drawer.toggle();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '450px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
