import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-tickets',
  templateUrl: './flight-tickets.component.html',
  styleUrls: ['./flight-tickets.component.css'],
})
export class FlightTicketsComponent implements OnInit {
  selectedFlight: any[];
  displayEconomyClass = false;
  displayBusinessClass = false;
  displayFirstClass = false;
  displayFinalCosting = false;

  finalBookingObject: any = {};

  isEconomyClass = false;
  isBusinessClass = false;
  isFirstClass = false;

  economyClassTickets = '';
  economyClassTicketPrice = '';

  businessClassTickets = '';
  businessClassTicketPrice = '';

  firstClassTickets = '';
  firstClassTicketPrice = '';

  finalTotalPrice = 0;
  finalTotalTickets = 0;

  constructor(
    private flightService: FlightService,
    private toastr: ToastrService
  ) {
    this.selectedFlight = [];
  }

  ngOnInit(): void {
    this.flightService.getSelectedFlight().subscribe((selectedFlightsData) => {
      this.selectedFlight = selectedFlightsData;

      this.economyClassTicketPrice =
        selectedFlightsData[0].economyClassTicketCost;
      this.businessClassTicketPrice =
        selectedFlightsData[0].businessClassTicketCost;
      this.firstClassTicketPrice = selectedFlightsData[0].firstClassTicketCost;

      this.displayEconomyClass = selectedFlightsData[0].isEconomyClass;
      this.displayBusinessClass = selectedFlightsData[0].isBusinessClass;
      this.displayFirstClass = selectedFlightsData[0].isFirstClass;
    });
  }

  handleSetFormSubmit(event: Event) {
    event.preventDefault();

    if (!this.isEconomyClass && !this.isBusinessClass && !this.isFirstClass) {
      this.toastr.warning(
        'You have to select atleast one class before booking flight'
      );
      return console.log(
        'You have to select atleast one class before booking flight'
      );
    }
    this.finalTotalTickets = 0;
    this.finalTotalPrice = 0;
    this.finalBookingObject = {};

    if (this.isEconomyClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter economy class details');
        return console.log('Please enter economy class details');
      }
      this.finalBookingObject['isEconomyClass'] = true;
      this.finalBookingObject['economyClassTickets'] = parseInt(
        this.economyClassTickets
      );
      this.finalBookingObject['economyClassTicketCost'] =
        parseInt(this.economyClassTickets) *
        parseInt(this.economyClassTicketPrice);

      this.finalTotalTickets += parseInt(this.economyClassTickets);
      this.finalTotalPrice +=
        parseInt(this.economyClassTickets) *
        parseInt(this.economyClassTicketPrice);
    } else {
      this.finalBookingObject['isEconomyClass'] = false;
    }

    if (this.isBusinessClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter business class details');
        return console.log('Please enter business class details');
      }
      this.finalBookingObject['isBusinessClass'] = true;
      this.finalBookingObject['businessClassTickets'] = parseInt(
        this.businessClassTickets
      );
      this.finalBookingObject['businessClassTicketCost'] =
        parseInt(this.businessClassTickets) *
        parseInt(this.businessClassTicketPrice);

      this.finalTotalTickets += parseInt(this.businessClassTickets);
      this.finalTotalPrice += parseInt(this.businessClassTicketPrice);
    } else {
      this.finalBookingObject['isBusinessClass'] = false;
    }

    if (this.isFirstClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter first class details');
        return console.log('Please enter first class details');
      }

      this.finalBookingObject['isFirstClass'] = true;
      this.finalBookingObject['firstClassTickets'] = parseInt(
        this.firstClassTickets
      );
      this.finalBookingObject['firstClassTicketCost'] =
        parseInt(this.firstClassTickets) * parseInt(this.firstClassTicketPrice);

      this.finalTotalTickets += parseInt(this.firstClassTickets);
      this.finalTotalPrice += parseInt(this.firstClassTicketPrice);
    } else {
      this.finalBookingObject['isFirstClass'] = false;
    }

    this.displayFinalCosting = true;
  }

  bookFlight() {
    this.finalBookingObject['flightId'] = this.selectedFlight[0]._id;
    this.finalBookingObject['totalCost'] = this.finalTotalPrice;

    console.log('Final Book Flight: ', this.finalBookingObject);
  }
}
