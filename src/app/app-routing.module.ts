import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './DashBoard/flight-booking/flight-booking.component';
import { InvoiceComponent } from './DashBoard/invoice/invoice.component';

const routes: Routes = [
  { path: 'flight-booking', component: FlightBookingComponent},
  { path: 'invoice', component: InvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
