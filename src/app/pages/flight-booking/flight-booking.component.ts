import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css'],
})
export class FlightBookingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleFormSubmit(event: Event) {
    event.preventDefault();

    this.router.navigate(['/flights']);
  }
}
