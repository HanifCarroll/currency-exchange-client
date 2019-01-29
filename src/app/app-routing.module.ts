import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: '', component: HomeComponent },
  { path: 'account', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
