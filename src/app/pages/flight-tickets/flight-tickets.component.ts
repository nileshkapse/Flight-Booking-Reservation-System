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

    if (this.isEconomyClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter economy class details');
        return console.log('Please enter economy class details');
      }
      this.finalTotalTickets += parseInt(this.economyClassTickets);
      this.finalTotalPrice +=
        parseInt(this.economyClassTickets) *
        parseInt(this.economyClassTicketPrice);
    }

    if (this.isBusinessClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter business class details');
        return console.log('Please enter business class details');
      }
      this.finalTotalTickets += parseInt(this.businessClassTickets);
      this.finalTotalPrice += parseInt(this.businessClassTicketPrice);
    }

    if (this.isFirstClass) {
      if (this.economyClassTickets === '') {
        this.toastr.warning('Please enter first class details');
        return console.log('Please enter first class details');
      }
      this.finalTotalTickets += parseInt(this.firstClassTickets);
      this.finalTotalPrice += parseInt(this.firstClassTicketPrice);
    }

    this.displayFinalCosting = true;
  }

  bookFlight() {
    console.log('Final Book Flight');
  }
}
