import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReportComponent } from './pages/report/report.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FlightBookingComponent } from './pages/flight-booking/flight-booking.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'report', component: ReportComponent },
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'flight-history', component: FlightHistoryComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
