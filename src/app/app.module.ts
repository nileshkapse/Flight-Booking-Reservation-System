import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './pages/booking-form/booking-form.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
