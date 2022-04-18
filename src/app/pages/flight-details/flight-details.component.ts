import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  selectedFlight: any[];
  totalSeats = 0;
  remainingSeats = 0;

  constructor(private flightService: FlightService) {
    this.selectedFlight = [];
  }

  ngOnInit(): void {
    this.flightService.getSelectedFlight().subscribe((flightData) => {
      this.selectedFlight = flightData;
    });
  }

  getTotalSeats() {
    if (this.selectedFlight[0].isEconomyClass) {
      this.totalSeats += this.selectedFlight[0].economyClassTotalSeats;
    }

    if (this.selectedFlight[0].isBusinessClass) {
      this.totalSeats += this.selectedFlight[0].businessClassTotalSeats;
    }

    if (this.selectedFlight[0].isFirstClass) {
      this.totalSeats += this.selectedFlight[0].firstClassTotalSeats;
    }

    return this.totalSeats;
  }

  getRemainingSeats() {
    if (this.selectedFlight[0].isEconomyClass) {
      this.remainingSeats += this.selectedFlight[0].economyClassRemainingSeats;
    }

    if (this.selectedFlight[0].isBusinessClass) {
      this.remainingSeats += this.selectedFlight[0].businessClassRemainingSeats;
    }

    if (this.selectedFlight[0].isFirstClass) {
      this.remainingSeats += this.selectedFlight[0].firstClassRemainingSeats;
    }

    return this.remainingSeats;
  }
}
