import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FlightService } from 'src/app/services/Flight/flight.service';

@Component({
  selector: 'app-flight-history',
  templateUrl: './flight-history.component.html',
  styleUrls: ['./flight-history.component.css'],
})
export class FlightHistoryComponent implements OnInit {
  flightHistory: any[];

  displayModal = false;
  constructor(
    private router: Router,
    private flightService: FlightService,
    private toastr: ToastrService
  ) {
    this.flightHistory = [];
  }

  ngOnInit(): void {
    this.displayModal = true;

    this.flightService.getFlightBookingHistory().subscribe(
      (result: any) => {
        console.log(result);
        if (result.isDone) {
          console.log('History Fetched Successfully');

          this.toastr.success('History Fetched Successfully');

          this.flightHistory = result.data;
          this.flightService.flightHistory = result.data;
          this.displayModal = false;
        } else {
          console.log('Error', result.err.writeErrors[0].errmsg);
          this.toastr.error('Error', result.err.writeErrors[0].errmsg);
          this.displayModal = false;
        }
      },
      (error) => {
        console.log('Error Occured: ', error.error.msg);
        this.toastr.error('Error', error.error.msg);
        this.displayModal = false;
      }
    );
  }

  viewReceipt(flightItem: any) {
    this.flightService.bookedFlight.splice(0, 1);
    this.flightService.bookedFlight.push([flightItem]);
    this.router.navigate(['/flight-receipt']);
  }
}
