import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/services/Flight/flight.service';

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

  constructor(
    private flightService: FlightService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    var newFlightObject: any = {
      name: this.flightName,
      routeSource: this.origin,
      routeDestination: this.destination,
      flightDuration: this.duration,
      departureDate: this.departureDate,
      departureTime: this.departureTime,
      returnDate: this.returnDate,
      returnTime: this.returnTime,
      isEconomyClass: this.isEconomyClass,
      isBusinessClass: this.isBusinessClass,
      isFirstClass: this.isFirstClass,
    };

    if (this.isEconomyClass) {
      if (
        this.economyClassSeats === '' ||
        this.economyClassTicketPrice === ''
      ) {
        this.toastr.warning('Error', 'Please enter economy class details');
        return console.log('Please enter economy class details');
      }
      newFlightObject['economyClassSeats'] = parseInt(this.economyClassSeats);
      newFlightObject['economyClassTicketPrice'] = parseInt(
        this.economyClassTicketPrice
      );
    }

    if (this.isBusinessClass) {
      if (
        this.businessClassSeats === '' ||
        this.businessClassTicketPrice === ''
      ) {
        this.toastr.warning('Error', 'Please enter business class details');
        return console.log('Please enter business class details');
      }

      newFlightObject['businessClassSeats'] = parseInt(this.businessClassSeats);
      newFlightObject['businessClassTicketPrice'] = parseInt(
        this.businessClassTicketPrice
      );
    }

    if (this.isFirstClass) {
      if (this.firstClassSeats === '' || this.firstClassTicketPrice === '') {
        this.toastr.warning('Error', 'Please enter first class details');
        return console.log('Please enter first class details');
      }
      newFlightObject['firstClassSeats'] = parseInt(this.firstClassSeats);
      newFlightObject['firstClassTicketPrice'] = parseInt(
        this.firstClassTicketPrice
      );
    }

    console.log('New Flight Data: ', newFlightObject);

    this.flightService.addNewFligt(newFlightObject).subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('Flight Added Successfully');

          this.flightName = '';
          this.origin = '';
          this.destination = '';
          this.duration = '';

          this.departureDate = '';
          this.departureTime = '';
          this.returnDate = '';
          this.returnTime = '';

          this.isEconomyClass = false;
          this.economyClassSeats = '';
          this.economyClassTicketPrice = '';

          this.isBusinessClass = false;
          this.businessClassSeats = '';
          this.businessClassTicketPrice = '';

          this.isFirstClass = false;
          this.firstClassSeats = '';
          this.firstClassTicketPrice = '';

          this.toastr.success('Flight Added Successfully');
        } else {
          console.log('Error', result.err);
          this.toastr.error('Error', result.err);
        }
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
      }
    );
  }
}
