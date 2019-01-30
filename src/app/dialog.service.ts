import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from './login/login.component';
import {Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog, 
    public router: Router) { }

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
    //this.router.navigate(['create-account'])
  }
}
