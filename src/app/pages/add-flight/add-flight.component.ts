import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent implements OnInit {
  flightName = '';
  origin = '';
  destination = '';
  duration = '';

  departureDate = '';
  departureTime = '';
  returnDate = '';
  returnTime = '';

  isEconomyClass = false;
  economyClassSeats = '';
  economyClassTicketPrice = '';

  isBusinessClass = false;
  businessClassSeats = '';
  businessClassTicketPrice = '';

  isFirstClass = false;
  firstClassSeats = '';
  firstClassTicketPrice = '';

  constructor() {}

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    var newFlightObject: any = {
      flightName: this.flightName,
      origin: this.origin,
      destination: this.destination,
      duration: this.duration,
      departureDate: this.departureDate,
      departureTime: this.departureTime,
      returnDate: this.returnDate,
      returnTime: this.returnTime,
      isEconomyClass: this.isEconomyClass,
      isBusinessClass: this.isBusinessClass,
      isFirstClass: this.isFirstClass,
    };

    if (this.isEconomyClass) {
      newFlightObject['economyClassSeats'] = parseInt(this.economyClassSeats);
      newFlightObject['economyClassTicketPrice'] = parseInt(
        this.economyClassTicketPrice
      );
    }

    if (this.isBusinessClass) {
      newFlightObject['businessClassSeats'] = parseInt(this.businessClassSeats);
      newFlightObject['businessClassTicketPrice'] = parseInt(
        this.businessClassTicketPrice
      );
    }

    if (this.isFirstClass) {
      newFlightObject['firstClassSeats'] = parseInt(this.firstClassSeats);
      newFlightObject['firstClassTicketPrice'] = parseInt(
        this.firstClassTicketPrice
      );
    }

    console.log('New Flight Data: ', newFlightObject);
  }
}
