import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  bookingData: any[];

  constructor(
    private toastr: ToastrService,
    private flightService: FlightService,
    private router: Router
  ) {
    this.bookingData = [];
  }

  ngOnInit(): void {
    this.flightService.getBookedFlightData().subscribe((newData) => {
      this.bookingData = newData[0];
      console.log('Data:::', newData[0]);
    });
    if (this.bookingData === undefined) {
      this.router.navigate(['/flight-booking']);
    }
  }
}
