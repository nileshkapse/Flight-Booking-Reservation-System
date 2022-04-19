import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  bookingData: any[];

  tickets = [
    { ticketNo: '128391823', flightClass: 'Economy Class' },
    { ticketNo: '112391823', flightClass: 'Economy Class' },
  ];

  constructor(
    private toastr: ToastrService,
    private flightService: FlightService
  ) {
    this.bookingData = [];
  }

  ngOnInit(): void {
    this.flightService.getBookedFlightData().subscribe((newData) => {
      this.bookingData = newData[0];
      console.log('Data:::', newData[0]);
    });
  }
}
