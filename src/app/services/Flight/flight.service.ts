import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { API_PATH, TOKEN_PREFIX } from 'src/app/constants/IMPData';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  flights: any[];
  selectedFlight: any[];
  bookedFlight: any[];
  flightHistory: any[];

  constructor(private http: HttpClient) {
    this.flights = [];
    this.selectedFlight = [];
    this.bookedFlight = [];
    this.flightHistory = [];
  }

  getFetchedFlights() {
    return of(this.flights);
  }

  getFlights(filterObject: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/getflights`,
      {
        filters: filterObject,
      },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }

  addNewFligt(flightData: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/addFlight`,
      { data: flightData },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }

  // Selected Flights
  setSelectedFlight(flightData: any) {
    this.selectedFlight.splice(0, 1);
    return this.selectedFlight.push(flightData);
  }

  getSelectedFlight() {
    return of(this.selectedFlight);
  }

  // Book Flight
  bookNewFlight(flightData: any) {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/booking/newbooking`,
      {
        data: flightData,
      },
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }

  getBookedFlightData() {
    return of(this.bookedFlight);
  }

  // Flight Booking
  getFlightBookingHistory() {
    const jwt_token = localStorage.getItem('token');

    return this.http.post(
      `${API_PATH}/flight/booking/getbookings`,
      {},
      {
        headers: {
          authorization: `${TOKEN_PREFIX} ${jwt_token}`,
        },
      }
    );
  }
}
