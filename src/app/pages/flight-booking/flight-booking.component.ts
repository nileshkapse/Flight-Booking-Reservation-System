import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/Flight/flight.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css'],
})
export class FlightBookingComponent implements OnInit {
  tripType: string;

  origin: string;
  destination: string;

  departureDate: string;
  returnDate: string;

  adultCount: number;
  childrenCount: number;

  flightClass: string;
  constructor(
    private router: Router,
    private flightService: FlightService,
    private toastr: ToastrService
  ) {
    this.tripType = '';
    this.origin = '';
    this.destination = '';
    this.departureDate = '';
    this.returnDate = '';
    this.adultCount = 0;
    this.childrenCount = 0;
    this.flightClass = '';
  }

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    if (this.origin === this.destination) {
      this.toastr.error('Error', 'Origin and source cannot be the same');
      return console.log('Origin and source cannot be the same');
    }

    if (this.departureDate > this.returnDate) {
      this.toastr.error('Error', 'Return date must be after departure date');
      return console.log('Return date must be after departure date');
    }

    if (this.adultCount === 0 && this.childrenCount === 0) {
      this.toastr.error(
        'Error',
        'Adult count and children count both cannot be 0 at the same time'
      );
      return console.log(
        'Adult count and children count both cannot be 0 at the same time'
      );
    }

    const newFlightBookingObject: any = {
      tripType: this.tripType,
      routeSource: this.origin,
      routeDestination: this.destination,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      adultCount: this.adultCount,
      childrenCount: this.childrenCount,
    };

    const newFlightBookingFilterObject: any = {
      routeSource: this.origin,
      routeDestination: this.destination,
      departureDate: this.departureDate,
    };

    if (this.flightClass === 'Any') {
      // newFlightBookingFilterObject['isEconomyClass'] = true;
      // newFlightBookingFilterObject['isBusinessClass'] = true;
      // newFlightBookingFilterObject['isFirstClass'] = true;
    } else if (this.flightClass === 'Economy Class') {
      newFlightBookingFilterObject['isEconomyClass'] = true;
    } else if (this.flightClass === 'Business Class') {
      newFlightBookingFilterObject['isBusinessClass'] = true;
    } else if (this.flightClass === 'First Class') {
      newFlightBookingFilterObject['isFirstClass'] = true;
    }

    console.log('Flight Object: ', newFlightBookingObject);
    console.log('Flight Fitler Object: ', newFlightBookingFilterObject);

    this.flightService.getFlights(newFlightBookingFilterObject).subscribe(
      (result: any) => {
        console.log('Fetched: ', result.data);
        // this.flightService.flights.push(...result.data);
        // this.router.navigate(['/flights']);
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
      }
    );
  }
}
