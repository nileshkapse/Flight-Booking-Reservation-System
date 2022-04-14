import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';

const routes: Routes = [{ path: '', component: BookingFormComponent},
{ path: 'flight-details', component: FlightDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
