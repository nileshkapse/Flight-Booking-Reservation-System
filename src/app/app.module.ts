import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ReportComponent } from './pages/report/report.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FlightHistoryComponent } from './pages/flight-history/flight-history.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FlightBookingComponent } from './pages/flight-booking/flight-booking.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { FlightDetailsComponent } from './pages/flight-details/flight-details.component';
import { DetailsComponent } from './pages/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginPageComponent,
    ReportComponent,
    FlightHistoryComponent,
    AccountSettingsComponent,
    HeaderComponent,
    FooterComponent,
    FlightBookingComponent,
    InvoiceComponent,
    FlightDetailsComponent,
    DetailsComponent,

  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
