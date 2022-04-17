import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  flights: any[];
  constructor(private flightService: FlightService) {
    this.flights = [];
  }

  ngOnInit(): void {
    this.flightService
      .getFetchedFlights()
      .subscribe((flightsData) => (this.flights = flightsData));
  }

  displayFlight(flight: any) {
    console.log(flight);
  }
}
