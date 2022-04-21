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
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { AddFlightComponent } from './pages/add-flight/add-flight.component';
import { FlightTicketsComponent } from './pages/flight-tickets/flight-tickets.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DisplayIssuesComponent } from './pages/display-issues/display-issues.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'report-issue', component: ReportComponent },
  { path: 'issues', component: DisplayIssuesComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'flight-tickets', component: FlightTicketsComponent },
  { path: 'flight-history', component: FlightHistoryComponent },
  { path: 'flight-receipt', component: InvoiceComponent },
  { path: 'add-flight', component: AddFlightComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
