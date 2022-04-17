import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css'],
})
export class FlightBookingComponent implements OnInit {
  constructor(private router: Router, private flightService: FlightService) {}

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    this.flightService.getFlights('Pune', 'Mumbai').subscribe(
      (result: any) => {
        console.log('Fetched: ', result.data);
        this.flightService.flights.push(...result.data);
        this.router.navigate(['/flights']);
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
      }
    );
  }
}
