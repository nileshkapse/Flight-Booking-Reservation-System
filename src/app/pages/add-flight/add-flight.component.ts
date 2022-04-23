import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ADMIN_ROLE } from 'src/app/constants/IMPData';
import { FlightService } from 'src/app/services/Flight/flight.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css'],
})
export class AddFlightComponent implements OnInit {
  user: any[];

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
    private userService: UserService,
    private flightService: FlightService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.user = [];
  }

  ngOnInit(): void {
    this.userService
      .getCurrentUser()
      .subscribe((userData) => (this.user = userData));

    if (this.user.length > 0) {
      if (this.user[0].role !== ADMIN_ROLE) {
        this.router.navigate(['/']);
        return;
      }
    }
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();

    if (this.origin === this.destination) {
      this.toastr.error('Error', 'Origin and destination cannot be same');
      return console.log('Origin and destination cannot be same');
    }

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
      newFlightObject['economyClassTotalSeats'] = parseInt(
        this.economyClassSeats
      );
      newFlightObject['economyClassRemainingSeats'] = parseInt(
        this.economyClassSeats
      );
      newFlightObject['economyClassTicketCost'] = parseInt(
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

      newFlightObject['businessClassTotalSeats'] = parseInt(
        this.businessClassSeats
      );
      newFlightObject['businessClassRemainingSeats'] = parseInt(
        this.businessClassSeats
      );
      newFlightObject['businessClassTicketCost'] = parseInt(
        this.businessClassTicketPrice
      );
    }

    if (this.isFirstClass) {
      if (this.firstClassSeats === '' || this.firstClassTicketPrice === '') {
        this.toastr.warning('Error', 'Please enter first class details');
        return console.log('Please enter first class details');
      }
      newFlightObject['firstClassTotalSeats'] = parseInt(this.firstClassSeats);
      newFlightObject['firstClassRemainingSeats'] = parseInt(
        this.firstClassSeats
      );
      newFlightObject['firstClassTicketCost'] = parseInt(
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
