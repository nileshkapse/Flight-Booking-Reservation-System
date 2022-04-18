import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  selectedFlight: any[];

  constructor(private flightService: FlightService) {
    this.selectedFlight = [];
  }

  ngOnInit(): void {
    this.flightService.getSelectedFlight().subscribe((flightData) => {
      this.selectedFlight = flightData;
    });
  }
}
