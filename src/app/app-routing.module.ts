import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', component: HomeComponent },
  { path: 'account', component: EditAccountComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'historical-data', component: HistoricalDataComponent },
  { path: 'accounts', component: AccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
