import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';
import { FlightBookingComponent } from './DashBoard/flight-booking/flight-booking.component';
import { InvoiceComponent } from './DashBoard/invoice/invoice.component';

const routes: Routes = [
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'flight-history', component: FlightHistoryComponent },
  { path: 'account-settings', component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
