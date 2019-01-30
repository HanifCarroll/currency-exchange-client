import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { HomeComponent } from './home/home.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { LoginComponent } from './login/login.component';

import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateAccountComponent,
    HomeComponent,
    EditAccountComponent,
    ExchangeComponent,
    HistoricalDataComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
  ],
  providers: [DialogService, MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],
})
export class AppModule {}
