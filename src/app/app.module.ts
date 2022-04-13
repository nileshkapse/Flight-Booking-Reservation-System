import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightBookingComponent } from './DashBoard/flight-booking/flight-booking.component';
import { InvoiceComponent } from './DashBoard/invoice/invoice.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    InvoiceComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
